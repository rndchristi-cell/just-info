function getCookie(request, name) {
  const header = request.headers.get('cookie') || '';
  const prefix = `${name}=`;
  const value = header.split(';').map((part) => part.trim()).find((part) => part.startsWith(prefix));
  return value ? decodeURIComponent(value.slice(prefix.length)) : null;
}

function renderBody(status, content) {
  const message = `authorization:github:${status}:${JSON.stringify(content)}`;
  const safeMessage = JSON.stringify(message).replace(/</g, '\\u003c');

  return `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>GitHub Authorization</title>
  </head>
  <body>
    <p>GitHub authorization sedang diproses…</p>
    <script>
      (() => {
        const authorizationMessage = ${safeMessage};
        const receiveMessage = (message) => {
          if (!window.opener) return;
          window.opener.postMessage(authorizationMessage, message.origin);
          window.removeEventListener('message', receiveMessage, false);
          window.close();
        };
        window.addEventListener('message', receiveMessage, false);
        window.opener?.postMessage('authorizing:github', '*');
      })();
    </script>
  </body>
</html>`;
}

function response(html, status) {
  return new Response(html, {
    status,
    headers: {
      'content-type': 'text/html; charset=UTF-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
      'referrer-policy': 'no-referrer',
      'content-security-policy': "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'",
    },
  });
}

export async function onRequest(context) {
  const { request, env } = context;
  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return response(renderBody('error', {
      error: 'server_configuration_error',
      error_description: 'GitHub OAuth environment variables are not configured.',
    }), 500);
  }

  try {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const returnedState = url.searchParams.get('state');
    const storedState = getCookie(request, 'oauth_state');
    const clearCookie = 'oauth_state=; Max-Age=0; Path=/api/; HttpOnly; Secure; SameSite=Lax';

    if (!returnedState || !storedState || returnedState !== storedState) {
      return new Response(renderBody('error', {
        error: 'invalid_state',
        error_description: 'OAuth state validation failed. Please try signing in again.',
      }), {
        status: 400,
        headers: {
          'content-type': 'text/html; charset=UTF-8',
          'cache-control': 'no-store',
          'set-cookie': clearCookie,
          'x-content-type-options': 'nosniff',
          'referrer-policy': 'no-referrer',
          'content-security-policy': "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'",
        },
      });
    }

    if (url.searchParams.get('error')) {
      return new Response(renderBody('error', {
        error: url.searchParams.get('error'),
        error_description: url.searchParams.get('error_description') || 'GitHub OAuth authorization was denied.',
      }), {
        status: 400,
        headers: { 'content-type': 'text/html; charset=UTF-8', 'cache-control': 'no-store', 'set-cookie': clearCookie },
      });
    }

    if (!code) {
      return new Response(renderBody('error', {
        error: 'missing_code',
        error_description: 'GitHub OAuth code is missing.',
      }), {
        status: 400,
        headers: { 'content-type': 'text/html; charset=UTF-8', 'cache-control': 'no-store', 'set-cookie': clearCookie },
      });
    }

    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'user-agent': 'just-info-decap-oauth',
      },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code, state: returnedState }),
    });

    const result = await tokenResponse.json();

    if (!tokenResponse.ok || result.error || !result.access_token) {
      return new Response(renderBody('error', {
        error: result.error || 'oauth_token_error',
        error_description: result.error_description || 'GitHub access token was not returned.',
      }), {
        status: 401,
        headers: { 'content-type': 'text/html; charset=UTF-8', 'cache-control': 'no-store', 'set-cookie': clearCookie },
      });
    }

    return new Response(renderBody('success', { token: result.access_token, provider: 'github' }), {
      status: 200,
      headers: { 'content-type': 'text/html; charset=UTF-8', 'cache-control': 'no-store', 'set-cookie': clearCookie },
    });
  } catch (error) {
    console.error('OAuth callback error:', error);
    return response(renderBody('error', {
      error: 'server_error',
      error_description: 'Unexpected OAuth callback error.',
    }), 500);
  }
}
