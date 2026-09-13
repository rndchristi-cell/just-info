import { getCollection } from 'astro:content';

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export async function GET({ site }: { site: URL }) {
  const posts = await getCollection('blog');
  const staticPaths = [
    '',
    'artikel/',
    'produk-rekomendasi/',
    'tentang/',
    'kontak/',
    'kebijakan-privasi/',
    'disclaimer/',
    'affiliate-disclosure/',
  ];

  const urls = staticPaths.map((path) => ({
    url: new URL(path, site).href,
  }));

  const postUrls = posts
    .filter((post) => !post.data.noindex)
    .map((post) => ({
      url: new URL(`${post.id.replace(/\.md$/, '')}/`, site).href,
      lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString(),
    }));

  const allUrls = [...urls, ...postUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map((item) => `  <url><loc>${escapeXml(item.url)}</loc>${'lastmod' in item ? `<lastmod>${escapeXml(item.lastmod)}</lastmod>` : ''}</url>`)
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
