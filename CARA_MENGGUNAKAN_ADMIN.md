# 📖 Cara Menggunakan Admin Panel

## Langkah-langkah Login

1. **Buka website** di browser Anda
2. **Akses halaman admin** dengan salah satu cara:
   - Klik **floating button "Kelola Artikel"** di pojok kanan bawah halaman News
   - Ketik URL: `#/admin-news` di address bar
   - Atau ketik: `#/login` untuk langsung ke halaman login
3. **Masukkan kredensial**:
   - Username: `admin`
   - Password: `admin123`
4. **Klik tombol "Masuk"**

## Fitur Admin Panel

Setelah login, Anda dapat:

### ✅ Menambah Artikel Baru
1. Isi form "Tambah Artikel Baru"
2. Masukkan:
   - Judul Artikel
   - Sumber
   - URL Artikel
   - Deskripsi
3. Klik tombol "Tambah Artikel"
4. **Artikel baru akan otomatis muncul di halaman News (#/news) paling atas**

### ✏️ Edit Artikel
1. Scroll ke daftar artikel di bawah
2. Klik tombol "Edit" pada artikel yang ingin diubah
3. Form akan terisi otomatis dengan data artikel
4. Ubah data yang diperlukan
5. Klik "Update Artikel"
6. Atau klik "Batal" untuk membatalkan

### 🗑️ Hapus Artikel
1. Scroll ke daftar artikel
2. Klik tombol "Hapus" pada artikel yang ingin dihapus
3. Artikel akan langsung terhapus

### 🔗 Buka Link Artikel
- Klik tombol "Buka Link" untuk melihat artikel asli di tab baru

### 🚪 Logout
- Klik tombol "Logout" di header untuk keluar
- Anda akan diminta konfirmasi sebelum logout

## Keamanan

### 🔒 Proteksi Halaman
- Halaman admin hanya bisa diakses setelah login
- Jika belum login, akan otomatis redirect ke halaman login
- Session login tersimpan, jadi tidak perlu login ulang setiap kali refresh

### 🔑 Mengganti Password
Untuk keamanan yang lebih baik, ganti password default:

1. Buka file `src/context/AuthContext.jsx`
2. Cari bagian:
   ```javascript
   const ADMIN_CREDENTIALS = {
     username: 'admin',
     password: 'admin123' // Ganti ini
   };
   ```
3. Ganti `'admin123'` dengan password baru yang kuat
4. Simpan file
5. Restart development server

### ⚠️ Catatan Penting
- Password saat ini disimpan di frontend (tidak aman untuk production)
- Untuk website production, sebaiknya gunakan backend API untuk autentikasi
- Jangan share kredensial admin ke orang yang tidak berwenang

## Troubleshooting

### Tidak bisa login?
- Pastikan username dan password benar (case-sensitive)
- Cek console browser untuk error (F12)
- Clear browser cache dan coba lagi

### Artikel tidak tersimpan?
- Artikel disimpan di localStorage browser
- Jika clear browser data, artikel akan hilang
- Untuk production, gunakan database

### Lupa password?
- Cek file `src/context/AuthContext.jsx` untuk melihat password yang tersimpan
- Atau reset ke default: `admin123`

## Tips

- 💡 Artikel baru akan **otomatis muncul di halaman News** (`#/news`) **paling atas**
- 💡 Artikel dari admin ditampilkan **lebih dulu** daripada artikel statis
- 💡 Artikel ditampilkan dari yang terbaru di atas
- 💡 Semua perubahan langsung tersimpan di browser (localStorage)
- 💡 Backup artikel penting secara manual jika diperlukan
- 💡 Untuk melihat artikel yang baru ditambahkan, buka halaman News atau refresh halaman
