# Just Info

Blog berbasis Astro dengan Decap CMS untuk mengelola artikel melalui dashboard admin.

## Stack

- [Astro](https://astro.build/) untuk website statis.
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) untuk artikel Markdown.
- [Decap CMS](https://decapcms.org/) untuk pengelolaan konten.
- Cloudflare Pages + Pages Functions untuk hosting dan OAuth GitHub.

## Struktur penting

```text
.
├── functions/api/
│   ├── auth.js
│   └── callback.js
├── public/
│   └── admin/
│       ├── config.yml
│       └── index.html
└── src/
    ├── content/blog/
    ├── content.config.ts
    └── pages/
        ├── index.astro
        └── [...slug].astro
```

## Development

Install dependency:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Preview hasil build:

```bash
npm run preview
```

## Menulis artikel

Artikel disimpan di `src/content/blog/` sebagai Markdown dengan frontmatter berikut:

```yaml
---
title: Judul artikel
description: Ringkasan artikel
pubDate: 2026-09-08T10:00:00+07:00
category: Umum
tags:
  - tips
  - informasi
bannerImage: /images/uploads/banner.jpg
bannerUrl: https://contoh.com/produk
bannerPosisi: atas
---

Isi artikel...
```

`bannerUrl` bersifat opsional. Jika diisi, gambar banner menjadi tautan keluar dan ditandai sebagai tautan bersponsor (`rel="sponsored"`).

## Decap CMS

Dashboard tersedia di `/admin/`.

Konfigurasi CMS berada di `public/admin/config.yml`. Backend menggunakan GitHub repository ini dan OAuth proxy pada:

- `/api/auth`
- `/api/callback`

### Environment variables

Cloudflare Pages harus memiliki:

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

Keduanya adalah secret/configuration untuk GitHub OAuth dan **tidak boleh ditulis ke source code**.

GitHub OAuth App harus menggunakan callback URL:

```text
https://just-info-bww.pages.dev/api/callback
```

## Deployment

Deploy project ini sebagai Astro static site di Cloudflare Pages. Folder `functions/` digunakan sebagai Pages Functions sehingga endpoint OAuth tetap tersedia pada deployment yang sama.

Sebelum deploy, jalankan `npm run build` dan pastikan konfigurasi environment variable OAuth sudah tersedia di Cloudflare.
