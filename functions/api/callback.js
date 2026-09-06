function renderBody(status, content) {
  const message = `authorization:github:${status}:${JSON.stringify(content)}`;

  // Escape karakter < agar data JSON tidak dapat menutup tag <script>.
  const safeMessage = JSON.stringify(message).replace(/</g, '\\u003c');

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>GitHub Authorization</title>
  </head>
  <body>
    <script>
      (() => {
        const authorizationMessage = ${safeMessage};

        const receiveMessage = (message) => {
          if (!window.opener) return;

          window.opener.postMessage(
            authorizationMessage,
            message.origin,
          );

          window.removeEventListener(
            'message',
            receiveMessage,
            false,
          );

          window.close();
        };

        window.addEventListener(
          'message',
          receiveMessage,
          false,
        );

        window.opener.postMessage(
          'authorizing:github',
          '*',
        );
      })();
    </script>
  </body>
</html>`;

  return html;
}

export async function onRequest(context) {
  const { request, env } = context;
  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;

  try {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const oauthError = url.searchParams.get('error');

    if (oauthError) {
      return new Response(
        renderBody('error', {
          error: oauthError,
          error_description:
            url.searchParams.get('error_description') || oauthError,
        }),
        {
          status: 400,
          headers: {
            'content-type': 'text/html; charset=UTF-8',
          },
        },
      );
    }

    if (!code) {
      return new Response(
        renderBody('error', {
          error: 'missing_code',
          error_description: 'GitHub OAuth code is missing.',
        }),
        {
          status: 400,
          headers: {
            'content-type': 'text/html; charset=UTF-8',
          },
        },
      );
    }

    const tokenResponse = await fetch(
      'https://github.com/login/oauth/access_token',
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'user-agent': 'just-info-decap-oauth',
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
        }),
      },
    );

    const result = await tokenResponse.json();

    if (!tokenResponse.ok || result.error || !result.access_token) {
      return new Response(
        renderBody('error', {
          error: result.error || 'oauth_token_error',
          error_description:
            result.error_description || 'GitHub access token was not returned.',
        }),
        {
          status: 401,
          headers: {
            'content-type': 'text/html; charset=UTF-8',
          },
        },
      );
    }

    return new Response(
      renderBody('success', {
        token: result.access_token,
        provider: 'github',
      }),
      {
        status: 200,
        headers: {
          'content-type': 'text/html; charset=UTF-8',
        },
      },
    );
  } catch (error) {
    console.error('OAuth callback error:', error);

    return new Response(
      renderBody('error', {
        error: 'server_error',
        error_description: 'Unexpected OAuth callback error.',
      }),
      {
        status: 500,
        headers: {
          'content-type': 'text/html; charset=UTF-8',
        },
      },
    );
  }
}
