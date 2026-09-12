---
title: Apa Itu Shared Hosting? Panduan WordPress untuk Pemula
description: Pelajari pengertian shared hosting, kelebihan dan kekurangannya
  untuk WordPress, fitur hosting yang perlu diperhatikan, perbedaan Apache dan
  LiteSpeed, arti RAM, CPU, NPROC, entry process, I/O, inode, serta kapan
  saatnya upgrade ke hosting yang lebih tinggi.
author: Just Info
pubDate: 2026-09-12T18:37:00+07:00
category: website
tags:
  - sharedhosting
  - wordpress
bannerImage: /images/uploads/143980.webp
bannerPosisi: atas
noindex: false
---
## Apa itu shared hosting?

**Shared hosting adalah layanan hosting yang menempatkan beberapa akun website pada satu server fisik dan membagi sumber daya server tersebut di antara para pengguna.**

Sumber daya yang biasanya digunakan bersama atau dibatasi per akun meliputi CPU, RAM, penyimpanan, proses PHP, bandwidth, I/O disk, dan jumlah koneksi yang dapat diproses secara bersamaan.

Dengan shared hosting, Anda tidak perlu membeli server sendiri atau mengelola konfigurasi Linux dari awal. Provider biasanya menyediakan panel kontrol seperti cPanel, DirectAdmin, atau panel khusus untuk mengatur domain, email, database, file, SSL, dan instalasi WordPress.

> **Kesimpulan singkat:** Shared hosting adalah titik awal yang praktis bagi pemula yang ingin belajar mengelola website sendiri tanpa langsung berhadapan dengan kompleksitas VPS atau server dedicated.

## Mengapa shared hosting cocok untuk belajar WordPress?

WordPress dapat digunakan untuk berbagai kebutuhan, mulai dari blog pribadi, portofolio, company profile, sampai toko online kecil. Untuk website baru yang trafiknya belum besar, shared hosting biasanya sudah menyediakan kebutuhan dasar yang diperlukan.

WordPress.org saat ini merekomendasikan host mendukung PHP 8.3 atau lebih baru, MariaDB 10.11 atau MySQL 8.0 atau lebih baru, serta HTTPS. WordPress juga merekomendasikan Apache atau Nginx sebagai web server yang kuat dan kaya fitur, meskipun server lain yang mendukung PHP dan MySQL juga dapat digunakan.[1](https://wordpress.org/about/requirements/ "Requirements | WordPress.org")

Shared hosting dapat menjadi lingkungan belajar yang baik karena Anda dapat berlatih:

* menghubungkan domain dan hosting;
* mengatur DNS dan nameserver;
* memasang SSL atau HTTPS;
* menginstal WordPress;
* mengelola tema dan plugin;
* membuat backup dan memulihkan website;
* mengelola email dengan domain sendiri;
* memahami batas resource;
* memperbaiki masalah dasar website.

Pengalaman tersebut berguna ketika Anda nantinya pindah ke managed WordPress hosting, VPS, cloud hosting, atau server dengan resource yang lebih besar.

## Bagaimana shared hosting bekerja?

Dalam shared hosting, satu server menjalankan banyak akun pelanggan. Setiap akun biasanya memiliki direktori, database, domain, email, dan batas resource sendiri.

Contohnya, satu server dapat menampung banyak website. Ketika salah satu website menerima lonjakan trafik atau menjalankan proses berat, sistem pembatas seperti CloudLinux dapat membantu mencegah satu akun menghabiskan seluruh sumber daya server.

CloudLinux menjelaskan bahwa limit seperti CPU, memory, I/O, jumlah proses, dan entry process digunakan untuk menjaga agar satu website tidak menjatuhkan performa seluruh server.[3](https://docs.cloudlinux.com/cloudlinuxos/limits/ "CloudLinux OS Limits Documentation")

Pembagian resource tidak selalu berarti semua akun mendapat bagian yang sama setiap saat. Provider dapat menggunakan paket berbeda. Paket yang lebih tinggi biasanya memperoleh limit CPU, RAM, proses, I/O, atau jumlah akun yang lebih besar.

## Kelebihan shared hosting untuk WordPress

### 1. Harga lebih terjangkau

Shared hosting biasanya lebih murah daripada VPS atau server dedicated karena biaya server dan infrastruktur dibagi di antara banyak pengguna.

Hal ini membuatnya sesuai untuk pemula yang baru menguji ide website atau belum memiliki pendapatan stabil dari website.

### 2. Mudah digunakan

Panel hosting biasanya menyediakan antarmuka untuk membuat database, mengatur domain, memasang SSL, membuat email, dan melakukan instalasi WordPress.

Pemula tidak harus langsung memahami command line, systemd, firewall Linux, web server, atau konfigurasi database tingkat lanjut.

### 3. Cocok untuk website dengan trafik awal rendah hingga menengah

Blog baru, website personal, company profile, dan toko online kecil biasanya belum membutuhkan sumber daya seperti server dedicated.

Yang penting adalah paket memiliki resource yang wajar, server stabil, backup, SSL, dan dukungan yang dapat membantu ketika terjadi masalah.

### 4. Pemeliharaan server ditangani provider

Provider biasanya bertanggung jawab atas hardware, jaringan, sistem operasi, dan sebagian konfigurasi server. Anda dapat lebih fokus pada konten, produk, pelanggan, dan pengelolaan WordPress.

Tanggung jawab provider tetap memiliki batas. Anda masih harus memperbarui WordPress, plugin, tema, akun, dan konten.

### 5. Tersedia fitur pendukung WordPress

Banyak shared hosting menawarkan instalasi WordPress, backup otomatis, SSL gratis, cache, staging, migrasi, email domain, dan pemilihan versi PHP.

Fitur tersebut dapat mengurangi pekerjaan teknis bagi pemula.

### 6. Memudahkan proses belajar bertahap

Anda dapat memulai dari website sederhana, memahami cara kerjanya, mengamati penggunaan resource, lalu meningkatkan paket ketika kebutuhan semakin jelas.

Pendekatan ini sering lebih efisien daripada langsung menyewa VPS tetapi belum memiliki pengetahuan untuk mengelolanya.

## Kekurangan shared hosting untuk WordPress

### 1. Resource terbatas

Anda tidak memiliki akses penuh ke seluruh CPU dan RAM server. Setiap paket memiliki batas penggunaan.

Jika website mencapai batas CPU, memory, entry process, atau proses PHP, website dapat menjadi lambat, mengembalikan error, atau tidak mampu melayani permintaan baru.

### 2. Performa dapat dipengaruhi pengguna lain

Walaupun provider menerapkan pembatasan, kepadatan server dan pola penggunaan akun lain tetap dapat memengaruhi pengalaman. Kualitas isolasi resource berbeda-beda antar provider.

### 3. Kontrol server lebih sedikit

Anda biasanya tidak bebas menginstal software server, mengubah konfigurasi tingkat sistem, menjalankan service khusus, atau memasang modul tertentu.

### 4. Tidak ideal untuk trafik tinggi atau proses berat

Website dengan trafik tinggi, query database berat, unggahan besar, pencarian kompleks, crawling intensif, atau pekerjaan latar belakang mungkin cepat mencapai batas shared hosting.

### 5. Risiko overselling

Sebagian provider menjual paket dengan klaim seperti “unlimited”. Dalam praktiknya, tetap ada batas penggunaan wajar, inode, CPU, memory, proses, database, atau kebijakan resource.

Jangan menganggap label “unlimited” berarti resource tidak terbatas secara teknis.

### 6. Backup tidak selalu cukup

Backup provider dapat berguna, tetapi Anda perlu mengetahui frekuensi backup, retensi, lokasi, dan cara restore. Website penting sebaiknya memiliki salinan backup tambahan di lokasi terpisah.

### 7. Migrasi tetap membutuhkan persiapan

Pindah hosting dapat melibatkan file, database, DNS, email, SSL, cron job, konfigurasi cache, dan pengujian. Shared hosting yang baik seharusnya menyediakan prosedur migrasi atau bantuan teknis yang jelas.

## Jenis website WordPress yang cocok di shared hosting

| Jenis website                   | Kesesuaian                     | Catatan                                                     |
| ------------------------------- | ------------------------------ | ----------------------------------------------------------- |
| Blog pribadi                    | Sangat cocok                   | Mulai dari paket dasar dengan cache dan SSL                 |
| Portofolio                      | Sangat cocok                   | Perhatikan kapasitas gambar dan backup                      |
| Company profile                 | Cocok                          | Pilih hosting stabil dengan email dan SSL                   |
| Website komunitas kecil         | Cocok dengan pemantauan        | Periksa jumlah pengguna, komentar, dan spam                 |
| Toko online kecil               | Cocok dengan konfigurasi tepat | Perhatikan checkout, payment gateway, cron, dan database    |
| Blog dengan trafik besar        | Perlu evaluasi                 | Pantau CPU, memory, PHP workers, dan cache                  |
| Marketplace                     | Biasanya kurang cocok          | Pertimbangkan cloud, VPS, atau arsitektur khusus            |
| Website dengan proses real-time | Sering kurang cocok            | Shared hosting memiliki keterbatasan service dan koneksi    |
| Aplikasi bisnis kompleks        | Biasanya kurang cocok          | Gunakan platform atau server yang sesuai kebutuhan aplikasi |

## Fitur hosting yang perlu diperhatikan

Harga bukan satu-satunya faktor. Dua paket dengan harga mirip dapat memiliki batas resource, teknologi server, dan kualitas dukungan yang sangat berbeda.

### 1. Versi PHP dan database

Pastikan provider mendukung versi PHP dan database yang masih modern serta dapat diperbarui. WordPress merekomendasikan PHP 8.3 atau lebih baru, MariaDB 10.11 atau MySQL 8.0 atau lebih baru.[1](https://wordpress.org/about/requirements/ "Requirements | WordPress.org")

Tanyakan juga apakah Anda dapat memilih versi PHP, mengatur ekstensi PHP, dan melihat batas seperti `memory_limit`, `max_execution_time`, `upload_max_filesize`, dan `post_max_size`.

### 2. Web server: Apache, Nginx, atau LiteSpeed

Web server menerima permintaan browser dan mengirimkan respons website. Apache dan Nginx adalah teknologi yang umum digunakan. LiteSpeed juga banyak dipakai dalam layanan hosting WordPress.

Jangan memilih hanya berdasarkan nama web server. Periksa implementasi, versi, konfigurasi, cache, dukungan plugin, dan kualitas server secara keseluruhan.

#### Apache

Apache adalah web server yang matang dan memiliki ekosistem luas. Banyak plugin serta konfigurasi WordPress menggunakan pola `.htaccess` dan modul yang umum tersedia pada Apache.

Kelebihannya adalah kompatibilitas yang luas, dokumentasi banyak, dan mudah ditemukan pada shared hosting. Performanya tetap dapat baik jika server, PHP, cache, dan tema dikonfigurasi dengan benar.

#### Nginx

Nginx dikenal sebagai web server dan reverse proxy yang efisien untuk melayani file statis dan menangani banyak koneksi. Konfigurasi WordPress pada Nginx biasanya menggunakan aturan server, bukan `.htaccess` seperti pada Apache.

Pemula sebaiknya memastikan provider sudah mengelola konfigurasi WordPress dengan benar karena akses konfigurasi tingkat server biasanya terbatas.

#### LiteSpeed Web Server

LiteSpeed Web Server dirancang sebagai web server berperforma tinggi dan dapat menggunakan konfigurasi yang kompatibel dengan Apache pada banyak skenario. Ekosistemnya juga terhubung dengan LiteSpeed Cache for WordPress.

Dokumentasi LiteSpeed menjelaskan bahwa integrasi cPanel, LiteSpeed, dan CloudLinux dapat menyediakan pengelolaan cache WordPress di tingkat server, konfigurasi PHP, fitur keamanan, dan dukungan HTTP/3 atau QUIC bergantung pada implementasi provider.[2](https://docs.litespeedtech.com/lsws/cp/cpanel/ "cPanel + LiteSpeed Administration Guide | LiteSpeed Documentation")

#### OpenLiteSpeed dan LiteSpeed Web Server

Keduanya tidak selalu sama dalam fitur dan dukungan. OpenLiteSpeed merupakan proyek open source, sedangkan LiteSpeed Web Server adalah produk komersial dengan fitur serta integrasi tertentu.

Tanyakan kepada provider web server mana yang digunakan dan apakah fitur LiteSpeed Cache benar-benar tersedia di tingkat server.

### 3. LiteSpeed Cache: bukan sekadar plugin cache biasa

LiteSpeed Cache for WordPress memiliki fitur plugin dan dapat berkomunikasi dengan cache server LiteSpeed ketika infrastrukturnya mendukung.

Jika provider hanya memasang plugin tetapi web servernya Apache atau Nginx, sebagian fitur cache tingkat server mungkin tidak tersedia. Plugin tetap dapat memiliki fitur optimasi tertentu, tetapi jangan menyamakan semua instalasi “LiteSpeed Cache” dengan konfigurasi LiteSpeed penuh.

Tanyakan hal berikut:

* Apakah server menggunakan LiteSpeed Web Server atau OpenLiteSpeed?
* Apakah LiteSpeed Cache server-level aktif?
* Apakah QUIC.cloud atau layanan CDN tertentu diperlukan untuk fitur tambahan?
* Apakah konfigurasi cache sudah aman untuk WooCommerce?
* Apakah cache dapat mengecualikan halaman cart, checkout, dan akun?

### 4. CPU atau SPEED limit

CPU menentukan seberapa banyak pekerjaan prosesor yang dapat digunakan akun. Beberapa provider menampilkan CPU dalam persentase, core, atau satuan lain.

Pada CloudLinux, SPEED dapat dinyatakan sebagai persentase dari satu core. Misalnya, 100% dapat merepresentasikan satu core, sedangkan 200% dapat merepresentasikan sekitar dua core berdasarkan konfigurasi limit.[3](https://docs.cloudlinux.com/cloudlinuxos/limits/ "CloudLinux OS Limits Documentation")

Angka CPU harus dibaca bersama memory, entry process, proses PHP, dan I/O. CPU besar tidak otomatis membuat website cepat jika database, disk, atau PHP worker menjadi bottleneck.

### 5. RAM atau physical memory

RAM adalah memori yang digunakan proses website. Pada hosting terkelola, limit memory dapat ditampilkan sebagai physical memory atau PMEM.

CloudLinux menjelaskan bahwa PMEM menghitung penggunaan memori fisik proses, termasuk shared memory dan disk cache sesuai mekanisme sistemnya.[3](https://docs.cloudlinux.com/cloudlinuxos/limits/ "CloudLinux OS Limits Documentation")

Jika batas memory tercapai, proses PHP dapat gagal dan website dapat menampilkan error seperti 500 atau 503. RAM penting untuk plugin berat, WooCommerce, page builder, impor produk, backup, dan pekerjaan administrasi.

Untuk blog ringan, paket dengan memory moderat dapat cukup. Toko online kecil biasanya membutuhkan margin lebih besar karena ada proses katalog, cart, checkout, pembayaran, email, dan scheduled task.

### 6. NPROC atau number of processes

**NPROC adalah batas jumlah proses yang dapat berjalan dalam lingkungan akun.** Proses tersebut dapat berasal dari PHP, cron, SSH, dan layanan lain yang dihitung oleh sistem hosting.

NPROC bukan ukuran RAM dan bukan jumlah pengunjung. Angka NPROC menunjukkan berapa banyak proses yang dapat aktif menurut limit provider.

Jika NPROC terlalu rendah atau website menjalankan banyak proses bersamaan, permintaan baru dapat tertunda atau gagal. Namun, NPROC tinggi tidak otomatis menyelesaikan masalah jika CPU atau memory kecil.

### 7. Entry Processes atau EP

**Entry Processes adalah batas jumlah permintaan yang sedang masuk atau diproses secara bersamaan**, terutama permintaan ke skrip dinamis seperti PHP. CloudLinux juga menjelaskan bahwa EP dapat mencakup koneksi bersamaan ke skrip Apache dinamis, SSH, dan cron sesuai implementasi.[3](https://docs.cloudlinux.com/cloudlinuxos/limits/ "CloudLinux OS Limits Documentation")

EP sering disalahartikan sebagai jumlah pengunjung harian. Itu keliru. EP lebih dekat dengan jumlah proses request aktif pada satu waktu.

Jika EP mencapai batas, pengunjung dapat mengalami error 508 atau permintaan dapat tertahan. Lonjakan trafik, bot, plugin lambat, query database, dan checkout WooCommerce dapat membuat EP cepat penuh.

### 8. I/O dan IOPS

I/O menunjukkan kecepatan atau kapasitas transfer data antara proses website dan penyimpanan. IOPS menunjukkan jumlah operasi input-output per detik.

Batas I/O rendah dapat membuat website lambat ketika membaca database, membuat cache, mengunggah gambar, melakukan backup, atau memproses banyak file.

Website dengan banyak gambar dan toko online perlu memperhatikan I/O. SSD atau NVMe membantu, tetapi hasil akhirnya tetap tergantung konfigurasi, kepadatan server, dan limit akun.

### 9. Storage dan inode

Storage menunjukkan kapasitas data yang dapat disimpan. Inode menunjukkan jumlah objek file dan direktori yang dapat digunakan.

Website dapat kehabisan inode meskipun kapasitas gigabyte masih tersedia. Penyebabnya dapat berupa cache yang menghasilkan banyak file, email lama, backup lokal, thumbnail gambar, atau file sementara.

Tanyakan:

* Apakah storage SSD atau NVMe?
* Berapa batas inode?
* Apakah email dan backup dihitung dalam storage?
* Apakah ada batas jumlah database?
* Apakah ada pembatasan jumlah file?

### 10. PHP workers atau concurrent PHP processes

Istilah PHP workers, PHP processes, atau concurrent connections dapat digunakan berbeda oleh setiap provider. Secara umum, angka tersebut berkaitan dengan jumlah proses PHP yang dapat menangani permintaan secara bersamaan.

PHP worker sedikit dapat menjadi bottleneck untuk toko online atau website dengan banyak permintaan dinamis. Cache halaman dapat mengurangi kebutuhan worker untuk halaman yang dapat di-cache, tetapi halaman login, cart, checkout, dan dashboard biasanya tetap dinamis.

### 11. HTTPS dan SSL gratis

Pastikan SSL gratis tersedia dan dapat diperbarui otomatis. WordPress merekomendasikan HTTPS untuk instalasi WordPress.[1](https://wordpress.org/about/requirements/ "Requirements | WordPress.org")

Periksa apakah SSL mencakup domain utama dan subdomain yang digunakan. Periksa juga apakah provider membantu memperbaiki mixed content dan redirect HTTP ke HTTPS.

### 12. Backup dan pemulihan

Cari tahu:

* seberapa sering backup dibuat;
* berapa lama backup disimpan;
* apakah backup tersimpan di server yang sama;
* apakah restore gratis atau berbayar;
* apakah Anda dapat mengunduh backup sendiri;
* apakah database dan email ikut dicadangkan;
* apakah tersedia staging sebelum update.

Backup yang tidak pernah diuji belum dapat dianggap sebagai strategi pemulihan yang andal.

### 13. Staging dan cloning

Staging adalah salinan website untuk menguji perubahan sebelum diterapkan ke website utama. Fitur ini berguna ketika memperbarui tema, plugin, WooCommerce, atau PHP.

Untuk pemula, staging dapat mengurangi risiko website rusak akibat pembaruan.

### 14. Cron job dan scheduled task

WordPress menggunakan WP-Cron untuk menjalankan pekerjaan terjadwal. Toko online dapat membutuhkan cron untuk email, sinkronisasi produk, pembayaran, stok, dan proses lainnya.

Tanyakan apakah provider mengizinkan cron job dan apakah ada batas frekuensi atau jumlah cron.

### 15. Support dan bantuan migrasi

Support yang responsif sering lebih penting daripada angka storage besar. Periksa kanal support, jam layanan, keahlian teknis, SLA, dan apakah support hanya menjawab pertanyaan billing atau juga membantu masalah hosting.

### 16. Kebijakan penggunaan resource

Baca Terms of Service dan Fair Usage Policy. Cari penjelasan tentang CPU, RAM, proses, backup, email, cron, database, dan batas trafik.

Provider yang transparan biasanya menjelaskan cara penggunaan resource di panel atau dokumentasi.

## Cara membaca paket hosting dengan benar

Jangan membandingkan paket hanya berdasarkan label “unlimited”. Gunakan tabel berikut sebagai kerangka.

| Fitur       | Pertanyaan yang perlu diajukan                                              |
| ----------- | --------------------------------------------------------------------------- |
| CPU         | Berapa limit CPU? Ditampilkan dalam persen, core, atau satuan lain?         |
| RAM         | Apakah angka tersebut PMEM, PHP memory limit, atau RAM virtual?             |
| NPROC       | Berapa jumlah proses maksimum? Apa yang dihitung?                           |
| EP          | Berapa request bersamaan yang diizinkan? Apa respons ketika limit tercapai? |
| PHP workers | Berapa proses PHP aktif yang dapat berjalan?                                |
| I/O         | Berapa batas kecepatan baca-tulis?                                          |
| IOPS        | Berapa operasi disk per detik?                                              |
| Storage     | SSD atau NVMe? Apakah backup dan email dihitung?                            |
| Inode       | Berapa jumlah file dan direktori maksimum?                                  |
| Web server  | Apache, Nginx, LiteSpeed, atau OpenLiteSpeed?                               |
| Cache       | Apakah cache tersedia di tingkat server? Apakah aman untuk WooCommerce?     |
| PHP         | Versi terbaru apa yang tersedia? Dapat memilih versi dan ekstensi?          |
| Database    | MariaDB atau MySQL versi berapa? Berapa jumlah database?                    |
| SSL         | Apakah SSL gratis tersedia dan auto-renew?                                  |
| Backup      | Berapa frekuensi, retensi, lokasi, dan biaya restore?                       |
| Support     | Apakah ada bantuan teknis dan migrasi?                                      |
| Upgrade     | Apakah upgrade dapat dilakukan tanpa migrasi manual?                        |

## Rekomendasi resource untuk pemula

Tidak ada angka universal karena kebutuhan website berbeda. Tabel berikut hanya panduan awal, bukan jaminan performa.

| Kebutuhan                 | Titik awal yang masuk akal                         | Yang perlu dipantau                       |
| ------------------------- | -------------------------------------------------- | ----------------------------------------- |
| Blog sederhana            | Hosting WordPress dasar dengan SSL dan cache       | CPU, EP, storage, inode                   |
| Company profile           | Hosting dasar dengan backup dan email              | CPU, PHP memory, backup, uptime           |
| Blog dengan page builder  | Resource sedikit lebih lega                        | PMEM, PHP workers, CPU, I/O               |
| Toko online kecil         | Paket dengan cache aman untuk WooCommerce dan cron | CPU, PMEM, EP, PHP workers, database, I/O |
| Banyak gambar atau produk | Storage dan I/O lebih tinggi                       | Storage, inode, I/O, backup               |
| Trafik mulai meningkat    | Paket upgrade atau managed WordPress               | CPU, EP, memory, response time            |

Provider dapat menggunakan definisi dan satuan berbeda. Karena itu, angka seperti “RAM 2 GB” harus ditanyakan kembali: apakah itu RAM akun, PMEM, `memory_limit` PHP, atau batas proses tertentu.

## Apakah shared hosting cukup untuk WooCommerce?

Shared hosting dapat cukup untuk toko online kecil, tetapi WooCommerce lebih berat daripada blog statis atau company profile.

Toko online menjalankan proses dinamis seperti:

* pencarian dan filter produk;
* login pelanggan;
* cart dan checkout;
* perhitungan ongkos kirim;
* payment gateway;
* pengurangan stok;
* email transaksi;
* sinkronisasi produk;
* cron job;
* laporan penjualan.

Untuk toko online kecil, pilih hosting yang menyediakan PHP modern, database yang baik, backup, cron, SSL, cache yang kompatibel dengan WooCommerce, dan dukungan teknis.

Jangan menggunakan page cache secara sembarangan pada halaman cart, checkout, akun, dan halaman lain yang berisi data personal. Konfigurasi cache harus mengecualikan halaman dinamis tersebut.

## Kapan shared hosting mulai terasa tidak cukup?

Pertimbangkan upgrade ketika terdapat tanda-tanda berikut secara konsisten:

### 1. Resource limit sering tercapai

Periksa metrik CPU, memory, EP, NPROC, I/O, dan proses PHP di panel hosting. Satu kali lonjakan tidak selalu berarti harus upgrade, tetapi limit yang sering tercapai perlu dianalisis.

### 2. Website lambat pada jam ramai

Jika website lambat hanya pada jam tertentu, penyebabnya dapat berupa kepadatan server, lonjakan trafik, proses berat, atau cache yang tidak efektif.

### 3. Error 508, 500, atau 503 berulang

Error dapat berkaitan dengan entry process, memory, proses PHP, plugin, database, atau konfigurasi server. Periksa log sebelum upgrade agar solusi tidak hanya menambah resource tanpa memperbaiki akar masalah.

### 4. Toko online mengalami checkout lambat

Checkout adalah bagian penting yang tidak selalu dapat di-cache. Jika proses checkout sering lambat atau gagal, Anda mungkin membutuhkan PHP workers, CPU, memory, database, atau server yang lebih kuat.

### 5. Trafik dan jumlah konten bertumbuh

Katalog besar, banyak gambar, banyak pengguna, dan banyak transaksi meningkatkan kebutuhan resource.

### 6. Anda membutuhkan kontrol server

Jika Anda perlu menginstal service khusus, mengatur konfigurasi tingkat server, menjalankan worker, menggunakan Redis, membuat queue, atau mengatur firewall sendiri, VPS atau cloud hosting mungkin lebih sesuai.

## Jalur upgrade setelah shared hosting

### 1. Upgrade paket shared hosting

Ini pilihan paling sederhana. Anda tetap menggunakan panel dan lingkungan yang sama, tetapi memperoleh resource lebih besar.

### 2. Managed WordPress hosting

Provider mengelola lebih banyak aspek teknis WordPress, seperti update, cache, backup, dan keamanan, bergantung paket. Pilihan ini cocok jika Anda ingin mengurangi pekerjaan server.

### 3. VPS terkelola

VPS memberikan resource dan kontrol lebih besar. Jika managed, provider membantu sebagian pengelolaan server. Ini dapat menjadi jembatan antara shared hosting dan server mandiri.

### 4. VPS tidak terkelola

Anda memperoleh kontrol lebih besar tetapi bertanggung jawab atas sistem operasi, firewall, web server, database, backup, monitoring, dan keamanan.

### 5. Cloud hosting

Cloud hosting dapat memberi fleksibilitas skala dan infrastruktur yang lebih besar. Model, harga, dan tingkat pengelolaannya berbeda-beda.

### 6. Dedicated server

Dedicated server menyediakan server untuk satu pelanggan. Pilihan ini biasanya baru relevan ketika trafik, kebutuhan resource, kepatuhan, atau kontrol infrastruktur sudah tinggi.

## Strategi upgrade yang aman

Jangan menunggu website benar-benar down sebelum upgrade. Gunakan langkah berikut.

1. Catat metrik resource selama beberapa hari atau minggu.
2. Periksa plugin dan tema yang paling banyak menggunakan resource.
3. Optimalkan gambar dan aktifkan cache yang sesuai.
4. Bersihkan database, revisi cron, dan batasi bot jika diperlukan.
5. Tanyakan kepada support penyebab limit tercapai.
6. Bandingkan upgrade paket dengan migrasi provider.
7. Buat backup lengkap sebelum perubahan.
8. Gunakan staging untuk menguji perubahan.
9. Uji halaman utama, formulir, login, checkout, pembayaran, dan email.
10. Pantau website setelah upgrade.

## Kesalahan pemula saat memilih shared hosting

### Memilih berdasarkan storage terbesar

Storage besar tidak membantu jika CPU, memory, PHP workers, atau I/O sangat kecil.

### Menganggap unlimited berarti tanpa batas

Selalu cari batas resource dan kebijakan fair use.

### Terlalu fokus pada LiteSpeed

LiteSpeed dapat menjadi nilai tambah, tetapi bukan jaminan website cepat. Tema, plugin, database, cache, konfigurasi, dan kualitas hardware tetap berpengaruh.

### Tidak menanyakan arti RAM

RAM dapat berarti PMEM, memory PHP, atau ukuran lain. Mintalah definisi dan cara pemantauannya.

### Mengabaikan EP dan NPROC

Website dapat error meskipun storage masih kosong jika proses atau koneksi bersamaan mencapai limit.

### Membeli paket terbesar sejak awal

Resource besar yang tidak digunakan hanya menambah biaya. Mulai dengan paket proporsional dan siapkan jalur upgrade.

### Tidak membaca harga renewal

Harga promo tahun pertama dapat berbeda dari harga perpanjangan. Hitung biaya jangka panjang.

### Tidak memeriksa backup dan restore

Backup yang tidak dapat dipulihkan tidak banyak membantu ketika website bermasalah.

## Checklist sebelum membeli shared hosting WordPress

* Mendukung PHP 8.3 atau lebih baru.
* Mendukung MariaDB 10.11 atau MySQL 8.0 atau lebih baru.
* Mendukung HTTPS dan SSL auto-renew.
* Menjelaskan CPU, PMEM/RAM, NPROC, EP, I/O, dan inode.
* Menyediakan storage SSD atau NVMe yang sesuai kebutuhan.
* Menyediakan cache yang kompatibel dengan konfigurasi WordPress.
* Menjelaskan apakah memakai Apache, Nginx, LiteSpeed, atau OpenLiteSpeed.
* Menyediakan backup dengan frekuensi dan retensi yang jelas.
* Memungkinkan upgrade tanpa proses yang menyulitkan.
* Menyediakan dukungan teknis dan bantuan migrasi.
* Memiliki harga renewal yang transparan.
* Memiliki kebijakan penggunaan resource yang dapat dibaca.
* Memungkinkan pengaturan cron job jika dibutuhkan.
* Memiliki panel yang mudah digunakan pemula.
* Tidak memaksa penggunaan plugin atau tema yang tidak diperlukan.

\##Hosting WordPress

**Cek shared hosting WordPress untuk pemula di [Domainesia](https://my.domainesia.com/ref.php?u=25629) atau [IdCloudhost](https://my.idcloudhost.com/aff.php?aff=14113)**

> **Disclosure afiliasi:** Artikel ini dapat memuat tautan afiliasi. Jika pembaca membeli layanan melalui tautan tersebut, pengelola artikel mungkin menerima komisi tanpa biaya tambahan bagi pembaca. Rekomendasi sebaiknya didasarkan pada resource nyata, kualitas support, harga renewal, fitur backup, keamanan, dan kemudahan upgrade.

## FAQ shared hosting WordPress

### Apakah shared hosting cocok untuk WordPress pemula?

Cocok. Shared hosting dapat menjadi titik awal yang praktis untuk belajar domain, hosting, WordPress, SSL, plugin, tema, backup, dan pengelolaan website.

### Apakah shared hosting cocok untuk blog?

Sangat cocok untuk blog baru dan blog dengan trafik rendah hingga menengah. Gunakan tema ringan, cache, optimasi gambar, dan plugin seperlunya.

### Apakah shared hosting cocok untuk toko online?

Cocok untuk toko online kecil dengan jumlah produk dan transaksi yang masih terkontrol. Pastikan hosting mendukung cron, database, PHP memory yang memadai, backup, dan konfigurasi cache WooCommerce yang benar.

### Mana yang lebih baik, Apache atau LiteSpeed?

Tidak ada jawaban universal. LiteSpeed dapat memberi integrasi yang baik dengan LiteSpeed Cache jika server-level cache benar-benar aktif. Apache memiliki kompatibilitas luas dan ekosistem matang. Kualitas provider dan konfigurasi sering lebih penting daripada label server.

### Berapa RAM yang dibutuhkan WordPress?

Tidak ada angka tunggal. Blog ringan membutuhkan lebih sedikit resource daripada WooCommerce dengan banyak plugin. Tanyakan apakah angka yang ditawarkan adalah PMEM, PHP memory limit, atau ukuran lain.

### Apa beda NPROC dan EP?

NPROC adalah batas jumlah proses yang dapat aktif dalam akun. EP lebih berkaitan dengan jumlah permintaan atau proses masuk yang berjalan secara bersamaan. Keduanya berbeda dan harus dibaca bersama CPU serta memory.

### Apakah NPROC tinggi menjamin website cepat?

Tidak. NPROC hanya salah satu batas. Website tetap dapat lambat jika CPU, memory, I/O, database, PHP workers, tema, atau plugin menjadi bottleneck.

### Kapan harus pindah ke VPS?

Pertimbangkan VPS ketika resource shared hosting sering habis, kebutuhan kontrol server meningkat, aplikasi memerlukan service khusus, atau trafik dan transaksi sudah melewati kemampuan paket shared hosting.

### Apakah shared hosting aman?

Shared hosting dapat aman jika provider menjaga infrastrukturnya dan pemilik website memperbarui WordPress, tema, plugin, akun, serta backup. Isolasi akun dan kualitas pengelolaan provider sangat penting.

## Kesimpulan

Shared hosting adalah pilihan yang masuk akal bagi pemula yang ingin belajar mengelola website WordPress sendiri. Dengan biaya yang relatif terjangkau dan panel yang mudah digunakan, Anda dapat membangun blog, website personal, company profile, atau toko online kecil tanpa langsung mengelola VPS.

Kelebihan shared hosting terletak pada kemudahan, harga, dan dukungan dasar. Kekurangannya adalah resource terbatas, kontrol server yang lebih sedikit, dan kemungkinan performa dipengaruhi kepadatan server atau batas akun.

Saat memilih hosting, jangan hanya melihat storage atau klaim unlimited. Perhatikan PHP, database, HTTPS, web server, cache, CPU, RAM atau PMEM, NPROC, entry process, PHP workers, I/O, IOPS, inode, backup, support, dan jalur upgrade.

Apache, Nginx, dan LiteSpeed masing-masing dapat menjalankan WordPress dengan baik jika dikonfigurasi secara tepat. LiteSpeed dapat menjadi pilihan menarik jika integrasi LiteSpeed Cache tersedia di tingkat server. Namun, web server yang bagus tidak dapat menggantikan hosting yang penuh sesak, plugin yang buruk, tema berat, atau konfigurasi yang salah.

Mulailah dari paket yang sesuai kebutuhan nyata. Pelajari cara membaca penggunaan resource. Perbaiki optimasi dasar. Setelah website tumbuh dan batas shared hosting mulai sering tercapai, Anda dapat upgrade ke paket yang lebih tinggi, managed WordPress, VPS, cloud hosting, atau server dedicated sesuai kebutuhan.

## Referensi
[1]: https://wordpress.org/about/requirements/ "Requirements | WordPress.org"

[2]: https://docs.litespeedtech.com/lsws/cp/cpanel/ "cPanel + LiteSpeed Administration Guide | LiteSpeed Documentation"

[3]: https://docs.cloudlinux.com/cloudlinuxos/limits/ "CloudLinux OS Limits Documentation"
- - -

**Catatan publikasi:** Batas resource, fitur panel, versi software, harga, teknologi web server, dan kebijakan provider dapat berubah. Selalu periksa dokumentasi serta halaman paket terbaru sebelum membeli atau merekomendasikan layanan hosting tertentu.
