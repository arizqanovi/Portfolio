# Arizqa Novi Ramadhani - Portfolio Website

Portfolio website untuk Arizqa Novi Ramadhani, seorang Digital Content Writer dan Language Practitioner.

## 🔐 Admin Panel

Website ini dilengkapi dengan admin panel yang terproteksi untuk mengelola artikel berita.

### Akses Admin Panel

- **Cara 1**: Klik floating button **"Kelola Artikel"** di pojok kanan bawah halaman News
- **Cara 2**: Akses langsung via URL `#/admin-news` atau `#/login`
- **Username**: `admin`
- **Password**: `admin123`

### Fitur

- ✅ Tambah, edit, dan hapus artikel berita
- ✅ Artikel yang ditambahkan **otomatis muncul di halaman News** (`#/news`) **paling atas**
- ✅ Artikel dari admin ditampilkan lebih dulu daripada artikel statis
- ✅ Protected dengan sistem autentikasi
- ✅ Data tersimpan di localStorage browser

⚠️ **Penting**: Ganti password default di `src/context/AuthContext.jsx` sebelum deploy ke production!

Lihat [ADMIN_CREDENTIALS.md](./ADMIN_CREDENTIALS.md) untuk detail lengkap tentang sistem autentikasi dan [CARA_MENGGUNAKAN_ADMIN.md](./CARA_MENGGUNAKAN_ADMIN.md) untuk panduan penggunaan.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
