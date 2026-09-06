export async function onRequest(context) {
  const { request, env } = context;
  const clientId = env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return new Response('Missing GITHUB_CLIENT_ID environment variable.', {
      status: 500,
      headers: {
        'content-type': 'text/plain; charset=UTF-8',
      },
    });
  }

  try {
    const requestUrl = new URL(request.url);
    const callbackUrl = new URL('/api/callback', requestUrl.origin);
    const githubUrl = new URL('https://github.com/login/oauth/authorize');

    githubUrl.searchParams.set('client_id', clientId);
    githubUrl.searchParams.set('redirect_uri', callbackUrl.href);
    githubUrl.searchParams.set('scope', 'repo user');

    // Catatan: state sebaiknya disimpan dan diverifikasi pada callback.
    // Untuk implementasi stateless sederhana, nilai ini tetap dikirim ke GitHub.
    const state = crypto.randomUUID();
    githubUrl.searchParams.set('state', state);

    return Response.redirect(githubUrl.href, 302);
  } catch (error) {
    console.error('OAuth authorization error:', error);

    return new Response('Unable to start GitHub OAuth flow.', {
      status: 500,
      headers: {
        'content-type': 'text/plain; charset=UTF-8',
      },
    });
  }
}
