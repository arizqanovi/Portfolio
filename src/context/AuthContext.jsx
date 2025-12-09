import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Kredensial admin (dalam produksi, ini harus di backend)
  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'masgilang' // Ganti dengan password yang lebih aman
  };

  useEffect(() => {
    // Cek apakah user sudah login sebelumnya
    const authStatus = localStorage.getItem('isAdminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = (username, password) => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      localStorage.setItem('isAdminAuthenticated', 'true');
      return { success: true };
    }
    return { success: false, message: 'Username atau password salah' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAdminAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
