---
title: Cara Hosting Email Custom Domain Gratis Tanpa Hosting
description: >
  Panduan Hosting email gratis dengan  custom domain di Cloudflare untuk terima
  dan kirim email. 
author: Just Info
pubDate: 2026-09-19T17:52:00+07:00
category: Tutorial
tags:
  - hosting
  - email gratis
bannerImage: /images/uploads/146818.webp
bannerPosisi: atas
noindex: false
---
Panduan ini menunjukkan cara menerima dan mengirim email dari domain sendiri (misal `care@namadomain.com`) tanpa perlu hosting berbayar atau server email sendiri — cukup pakai Cloudflare Email Routing dan Gmail.

## Yang Dibutuhkan

* Domain (belum harus terdaftar di Cloudflare, akan dijelaskan caranya)
* Akun Gmail pribadi/bisnis
* 2-Step Verification aktif di akun Gmail tersebut

- - -

## Bagian 0: Tambahkan Domain ke Cloudflare

Kalau domain kamu belum terdaftar di Cloudflare, ini langkah paling awal yang harus dilakukan dulu.

1. Buka **dash.cloudflare.com**, login atau daftar akun (gratis)
2. Klik **Add a domain**, ketik nama domain kamu (misal `namadomain.com`)
3. Pilih paket **Free**
4. Cloudflare akan scan DNS record yang sudah ada di domain kamu (biasanya dari registrar lama) — biarkan saja, nanti otomatis dipindahkan
5. Cloudflare akan kasih **2 nameserver baru** (contoh: `xxx.ns.cloudflare.com`)
6. Buka situs tempat kamu beli domain (misal Domainesia, Idcloudhost, Hostinger, Namecheap, dll), cari menu **Nameserver / DNS Management**
7. Ganti nameserver lama dengan 2 nameserver dari Cloudflare tadi
8. Simpan, lalu tunggu — proses pindah biasanya 15 menit sampai beberapa jam (kadang bisa sampai 24 jam)
9. Kalau sudah pindah, status domain di dashboard Cloudflare akan berubah jadi **Active**

Setelah status **Active**, baru lanjut ke bagian Email Routing di bawah.

- - -

## Bagian 1: Terima Email (Cloudflare Email Routing)

1. Buka **dash.cloudflare.com** → pilih domain kamu
2. Masuk menu **Email → Email Routing**
3. Klik **Create address**, isi:

   * Custom address (misal `care@namadomain.com`)
   * Destination → alamat Gmail pribadi kamu
4. Cloudflare otomatis menambahkan MX, SPF, dan DKIM record yang dibutuhkan
5. Selesai — semua email masuk ke `care@namadomain.com` akan otomatis diteruskan ke inbox Gmail kamu

- - -

## Bagian 2: Kirim Email Sebagai Custom Domain

Cloudflare hanya menyediakan server untuk **menerima**, bukan mengirim. Untuk kirim, kita pakai SMTP Gmail sebagai relay.

### Buat App Password

1. Buka **myaccount.google.com/security**
2. Aktifkan **2-Step Verification** (wajib)
3. Cari menu **App passwords** , kalau bingung, pakai fitur pencarian di bagain atas, cukup.ketik App password atau  Sandi Aplikasi → buat baru, beri nama bebas
4. Simpan kode 16 digit yang muncul

### Tambahkan Alamat Pengirim di Gmail

1. Gmail → **Settings → See all settings → Accounts and Import**
2. Bagian **Send mail as** → **Add another email address**
3. Isi Name dan `care@namadomain.com`, centang **Treat as an alias** → **Next Step**
4. Isi form SMTP:

   * **SMTP Server:** `smtp.gmail.com`
   * **Port:** `587`
   * **Username:** alamat Gmail utama (bukan alamat custom domain)
   * **Password:** App Password 16 digit tadi
   * Pilih **TLS**
5. Klik **Add Account »**
6. Cek inbox Gmail → buka email verifikasi → klik link konfirmasi

Setelah ini, saat Compose email, kamu bisa pilih **From: care@namadomain.com**.

Fitur ini disarankan untuk keperluan personal saja, bukan full untuk bisnis ya, kalaupun untuk bisnis paka saja untuk komunikasi, bukan untuk email marketing.

- - -

## Bagian 3: Tambah Signature Profesional

1. Gmail **Settings → General → Signature → Create new**
2. Susun isi signature, misal:

```
Hormat kami,
Nama Toko

📧 care@namadomain.com
📱 WA: nomor (bisa dijadikan link https://wa.me/62xxx)
🕐 Jam operasional
🌐 namadomain.com
```

3. Untuk logo: klik ikon gambar di toolbar → upload → pilih ukuran **Small**

   * Ukuran ideal file logo sebelum upload: crop persegi (1:1), sekitar 150x150px
4. Scroll ke **Signature defaults**, atur alamat `care@namadomain.com` memakai signature ini untuk New Emails & Reply/Forward
5. Klik **Save Changes** di bawah halaman

- - -

Setup ini gratis sepenuhnya dan bisa dikerjakan dari HP tanpa laptop atau hosting tambahan.
