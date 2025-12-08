# Kredensial Admin

## Login Admin Panel

Untuk mengakses halaman admin berita, gunakan kredensial berikut:

- **URL**: `#/admin-news` atau `#/login`
- **Username**: `admin`
- **Password**: `admin123`

## Keamanan

⚠️ **PENTING**: Kredensial ini disimpan di file `src/context/AuthContext.jsx`

Untuk meningkatkan keamanan di production:

1. **Ganti password default** di `src/context/AuthContext.jsx`:
   ```javascript
   const ADMIN_CREDENTIALS = {
     username: 'admin',
     password: 'password_anda_yang_kuat' // Ganti ini
   };
   ```

2. **Rekomendasi untuk production**:
   - Gunakan backend API untuk autentikasi
   - Implementasi JWT tokens
   - Gunakan environment variables untuk kredensial
   - Tambahkan rate limiting untuk mencegah brute force
   - Implementasi 2FA (Two-Factor Authentication)

## Fitur Autentikasi

- ✅ Login dengan username dan password
- ✅ Session persistence (tetap login setelah refresh)
- ✅ Protected route (redirect ke login jika belum login)
- ✅ Logout functionality
- ✅ Password visibility toggle
- ✅ Error handling untuk kredensial salah

## Cara Menggunakan

1. Buka website
2. Akses `#/admin-news` atau klik link admin
3. Akan otomatis redirect ke halaman login jika belum login
4. Masukkan username dan password
5. Setelah login, Anda bisa mengelola artikel berita
6. Klik tombol "Logout" untuk keluar

## File yang Terlibat

- `src/context/AuthContext.jsx` - Context untuk state autentikasi
- `src/pages/Login.jsx` - Halaman login
- `src/components/ProtectedRoute.jsx` - Component untuk protect route
- `src/pages/AdminNews.jsx` - Halaman admin (protected)
- `src/main.jsx` - Setup routing dan AuthProvider
