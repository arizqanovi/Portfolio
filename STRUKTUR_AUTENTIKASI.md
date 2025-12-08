# 🏗️ Struktur Sistem Autentikasi

## File-file yang Ditambahkan

### 1. Context Layer
```
src/context/AuthContext.jsx
```
**Fungsi**: Mengelola state autentikasi global
- Menyimpan status login user
- Fungsi login dan logout
- Validasi kredensial
- Persistence session dengan localStorage

### 2. Components
```
src/components/ProtectedRoute.jsx
```
**Fungsi**: Melindungi route yang memerlukan autentikasi
- Cek status login sebelum render component
- Redirect ke login jika belum login
- Loading state saat cek autentikasi

### 3. Pages
```
src/pages/Login.jsx
```
**Fungsi**: Halaman login untuk admin
- Form username dan password
- Toggle show/hide password
- Error handling
- Redirect ke admin panel setelah login sukses

```
src/pages/AdminNews.jsx (Updated)
```
**Perubahan**:
- Import useAuth dan useNavigate
- Tambah tombol Logout di header
- Fungsi handleLogout untuk keluar

### 4. Routing
```
src/main.jsx (Updated)
```
**Perubahan**:
- Wrap aplikasi dengan AuthProvider
- Tambah route `/login`
- Wrap route `/admin-news` dengan ProtectedRoute

## Alur Kerja Autentikasi

### Flow Login
```
1. User akses #/admin-news
   ↓
2. ProtectedRoute cek isAuthenticated
   ↓
3. Jika false → Redirect ke #/login
   ↓
4. User input username & password
   ↓
5. AuthContext validasi kredensial
   ↓
6. Jika valid → Set isAuthenticated = true
   ↓
7. Simpan status ke localStorage
   ↓
8. Redirect ke #/admin-news
   ↓
9. ProtectedRoute cek lagi → true
   ↓
10. Render AdminNews component
```

### Flow Logout
```
1. User klik tombol Logout
   ↓
2. Konfirmasi logout
   ↓
3. AuthContext.logout() dipanggil
   ↓
4. Set isAuthenticated = false
   ↓
5. Hapus status dari localStorage
   ↓
6. Redirect ke #/login
```

### Flow Refresh Page
```
1. User refresh browser
   ↓
2. AuthContext useEffect dijalankan
   ↓
3. Cek localStorage untuk status login
   ↓
4. Jika ada → Set isAuthenticated = true
   ↓
5. User tetap login (tidak perlu login ulang)
```

## Struktur Folder Lengkap

```
src/
├── context/
│   └── AuthContext.jsx          # State management autentikasi
├── components/
│   └── ProtectedRoute.jsx       # Route guard component
├── pages/
│   ├── Login.jsx                # Halaman login
│   ├── AdminNews.jsx            # Admin panel (protected)
│   ├── News.jsx                 # Halaman berita publik
│   └── ...                      # Pages lainnya
├── main.jsx                     # Entry point + routing
└── ...

Dokumentasi:
├── ADMIN_CREDENTIALS.md         # Info kredensial admin
├── CARA_MENGGUNAKAN_ADMIN.md    # Panduan penggunaan
└── STRUKTUR_AUTENTIKASI.md      # File ini
```

## Keamanan

### Level Saat Ini (Development)
- ✅ Protected routes
- ✅ Session persistence
- ✅ Password visibility toggle
- ⚠️ Kredensial di frontend (tidak aman untuk production)

### Rekomendasi untuk Production
- 🔐 Backend API untuk autentikasi
- 🔐 JWT tokens
- 🔐 Environment variables untuk secrets
- 🔐 HTTPS only
- 🔐 Rate limiting
- 🔐 Password hashing
- 🔐 2FA (Two-Factor Authentication)
- 🔐 Session timeout
- 🔐 Audit logging

## Cara Modifikasi

### Mengganti Username/Password
Edit `src/context/AuthContext.jsx`:
```javascript
const ADMIN_CREDENTIALS = {
  username: 'username_baru',
  password: 'password_baru'
};
```

### Menambah Multiple Users
Edit `src/context/AuthContext.jsx`:
```javascript
const ADMIN_USERS = [
  { username: 'admin1', password: 'pass1' },
  { username: 'admin2', password: 'pass2' }
];

const login = (username, password) => {
  const user = ADMIN_USERS.find(
    u => u.username === username && u.password === password
  );
  if (user) {
    setIsAuthenticated(true);
    localStorage.setItem('isAdminAuthenticated', 'true');
    return { success: true };
  }
  return { success: false, message: 'Username atau password salah' };
};
```

### Menambah Protected Route Baru
Edit `src/main.jsx`:
```javascript
<Route 
  path="/admin-settings" 
  element={
    <ProtectedRoute>
      <AdminSettings />
    </ProtectedRoute>
  } 
/>
```

### Menambah Role-Based Access
Modifikasi `AuthContext.jsx` untuk menyimpan role:
```javascript
const [user, setUser] = useState(null);

const login = (username, password) => {
  // ... validasi
  setUser({ username, role: 'admin' });
  // ...
};
```

Modifikasi `ProtectedRoute.jsx` untuk cek role:
```javascript
export default function ProtectedRoute({ children, requiredRole }) {
  const { user } = useAuth();
  
  if (!user) return <Navigate to="/login" />;
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }
  
  return children;
}
```

## Testing

### Test Login
1. Buka `#/login`
2. Coba login dengan kredensial salah → Harus muncul error
3. Login dengan kredensial benar → Harus redirect ke admin panel

### Test Protected Route
1. Logout dari admin panel
2. Coba akses `#/admin-news` langsung → Harus redirect ke login
3. Login → Harus bisa akses admin panel

### Test Session Persistence
1. Login ke admin panel
2. Refresh browser → Harus tetap login
3. Logout → Refresh → Harus redirect ke login

### Test Logout
1. Login ke admin panel
2. Klik logout → Harus muncul konfirmasi
3. Konfirmasi → Harus redirect ke login
4. Coba akses admin panel → Harus redirect ke login lagi
