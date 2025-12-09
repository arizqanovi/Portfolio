# Sistem Manajemen Artikel

## Cara Menambahkan Artikel Baru

1. Akses halaman admin melalui floating button **"Kelola Artikel"** di pojok kanan bawah halaman News
2. Isi formulir dengan detail artikel:
   - Judul Artikel
   - Sumber (nama website/media)
   - URL Artikel (link lengkap ke artikel)
   - Deskripsi singkat artikel
3. Klik tombol "Tambah Artikel"

## Cara Mengedit Artikel yang Sudah Ada

1. Akses halaman admin
2. Temukan artikel yang ingin diedit dalam daftar
3. Klik tombol "Edit" pada artikel tersebut
4. Formulir akan terisi otomatis dengan data artikel
5. Ubah informasi yang diperlukan
6. Klik tombol "Update Artikel"

## Cara Menghapus Artikel

1. Akses halaman admin
2. Temukan artikel yang ingin dihapus dalam daftar
3. Klik tombol "Hapus" pada artikel tersebut
4. Artikel akan langsung dihapus dari sistem

## Fitur Penting

- **Preservasi Artikel**: Artikel yang sudah ada tidak akan pernah dihapus secara otomatis saat menambahkan artikel baru
- **Penyimpanan Lokal**: Semua artikel disimpan di localStorage browser Anda
- **Akses Mudah**: Floating button **"Kelola Artikel"** di pojok kanan bawah halaman News untuk akses cepat ke admin panel
- **Integrasi Otomatis**: Artikel yang ditambahkan di admin panel **otomatis muncul di halaman News** (`#/news`) **paling atas**
- **Prioritas Tampilan**: Artikel dari admin ditampilkan lebih dulu daripada artikel statis

## Catatan Penting

- Artikel yang dihapus tidak dapat dikembalikan
- Data tersimpan di browser Anda, jadi jika Anda menghapus cache browser, artikel akan hilang
- Untuk menyimpan artikel secara permanen, pertimbangkan untuk menggunakan database server-side