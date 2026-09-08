function getCookie(request, name) {
  const header = request.headers.get('cookie') || '';
  const prefix = `${name}=`;
  const value = header.split(';').map((part) => part.trim()).find((part) => part.startsWith(prefix));
  return value ? decodeURIComponent(value.slice(prefix.length)) : null;
}

function renderBody(status, content, allowedOrigin) {
  const message = `authorization:github:${status}:${JSON.stringify(content)}`;
  const safeMessage = JSON.stringify(message).replace(/</g, '\\u003c');
  const safeOrigin = JSON.stringify(allowedOrigin).replace(/</g, '\\u003c');

  return `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>GitHub Authorization</title>
  </head>
  <body>
    <p>GitHub authorization sedang diproses…</p>
    <script>
      (() => {
        const authorizationMessage = ${safeMessage};
        const allowedOrigin = ${safeOrigin};
        const receiveMessage = (message) => {
          if (!window.opener || message.origin !== allowedOrigin) return;
          window.opener.postMessage(authorizationMessage, allowedOrigin);
          window.removeEventListener('message', receiveMessage, false);
          window.close();
        };
        window.addEventListener('message', receiveMessage, false);
        window.opener?.postMessage('authorizing:github', allowedOrigin);
      })();
    </script>
  </body>
</html>`;
}

function response(html, status, clearCookie) {
  const headers = {
    'content-type': 'text/html; charset=UTF-8',
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
    'referrer-policy': 'no-referrer',
    'content-security-policy': "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'",
  };

  if (clearCookie) headers['set-cookie'] = clearCookie;
  return new Response(html, { status, headers });
}

export async function onRequest(context) {
  const { request, env } = context;
  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;
  const requestUrl = new URL(request.url);
  const allowedOrigin = requestUrl.origin;
  const clearCookie = 'oauth_state=; Max-Age=0; Path=/api/; HttpOnly; Secure; SameSite=Lax';

  if (!clientId || !clientSecret) {
    return response(renderBody('error', {
      error: 'server_configuration_error',
      error_description: 'GitHub OAuth environment variables are not configured.',
    }, allowedOrigin), 500);
  }

  try {
    const code = requestUrl.searchParams.get('code');
    const returnedState = requestUrl.searchParams.get('state');
    const storedState = getCookie(request, 'oauth_state');

    if (!returnedState || !storedState || returnedState !== storedState) {
      return response(renderBody('error', {
        error: 'invalid_state',
        error_description: 'OAuth state validation failed. Please try signing in again.',
      }, allowedOrigin), 400, clearCookie);
    }

    if (requestUrl.searchParams.get('error')) {
      return response(renderBody('error', {
        error: requestUrl.searchParams.get('error'),
        error_description: requestUrl.searchParams.get('error_description') || 'GitHub OAuth authorization was denied.',
      }, allowedOrigin), 400, clearCookie);
    }

    if (!code) {
      return response(renderBody('error', {
        error: 'missing_code',
        error_description: 'GitHub OAuth code is missing.',
      }, allowedOrigin), 400, clearCookie);
    }

    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'user-agent': 'just-info-decap-oauth',
      },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });

    const result = await tokenResponse.json();

    if (!tokenResponse.ok || result.error || !result.access_token) {
      return response(renderBody('error', {
        error: result.error || 'oauth_token_error',
        error_description: result.error_description || 'GitHub access token was not returned.',
      }, allowedOrigin), 401, clearCookie);
    }

    return response(renderBody('success', { token: result.access_token, provider: 'github' }, allowedOrigin), 200, clearCookie);
  } catch (error) {
    console.error('OAuth callback error:', error);
    return response(renderBody('error', {
      error: 'server_error',
      error_description: 'Unexpected OAuth callback error.',
    }, allowedOrigin), 500, clearCookie);
  }
}
