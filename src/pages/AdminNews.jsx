import React, { useState, useEffect } from 'react';
import { ArrowLeft, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AdminNews() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    source: '',
    url: '',
    description: ''
  });
  const [editingId, setEditingId] = useState(null);

  // Load articles from localStorage on component mount
  useEffect(() => {
    const savedArticles = localStorage.getItem('newsArticles');
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
    } else {
      // Data awal jika belum ada di localStorage
      // Sistem ini tidak akan menghapus artikel yang sudah ada
      // Artikel yang telah Anda buat sebelumnya akan tetap dipertahankan
      const initialArticles = [
        {
          id: 1,
          title: "Pertamina Wajibkan Barcode untuk Pembelian Pertalite dan Solar, Begini Cara Mendaftarnya",
          source: "Suara Merdeka",
          url: "https://www.suaramerdeka.com/otomotif/0413682619/pertamina-wajibkan-barcode-untuk-pembelian-pertalite-dan-solar-begini-cara-mendaftarnya",
          description: "Pertamina menerapkan kebijakan baru yang mewajibkan penggunaan barcode untuk pembelian BBM jenis Pertalite dan Solar mulai bulan ini."
        }
      ];
      setArticles(initialArticles);
      localStorage.setItem('newsArticles', JSON.stringify(initialArticles));
    }
  }, []);

  // Save articles to localStorage whenever articles change
  useEffect(() => {
    localStorage.setItem('newsArticles', JSON.stringify(articles));
  }, [articles]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingId) {
      // Update artikel yang ada
      setArticles(prev => 
        prev.map(article => 
          article.id === editingId ? { ...formData, id: editingId } : article
        )
      );
      setEditingId(null);
    } else {
      // Tambah artikel baru
      const newArticle = {
        ...formData,
        id: Date.now() // ID sederhana berdasarkan timestamp
      };
      setArticles(prev => [...prev, newArticle]);
    }
    
    // Reset form
    setFormData({
      title: '',
      source: '',
      url: '',
      description: ''
    });
  };

  const handleEdit = (article) => {
    setFormData({
      title: article.title,
      source: article.source,
      url: article.url,
      description: article.description
    });
    setEditingId(article.id);
  };

  const handleDelete = (id) => {
    setArticles(prev => prev.filter(article => article.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setFormData({
        title: '',
        source: '',
        url: '',
        description: ''
      });
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      title: '',
      source: '',
      url: '',
      description: ''
    });
  };

  const handleLogout = () => {
    if (window.confirm('Apakah Anda yakin ingin keluar?')) {
      logout();
      navigate('/login');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="py-6 border-b border-pink-500/20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Admin Berita</h1>
          <div className="flex items-center gap-4">
            <a href="#/" className="inline-flex items-center text-pink-500 hover:text-pink-400 font-semibold">
              <ArrowLeft className="mr-2 w-4 h-4" /> Kembali ke Beranda
            </a>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors"
            >
              <LogOut className="mr-2 w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Kelola <span className="text-pink-500">Berita</span>
            </h2>
            <p className="text-gray-400 mt-3">Tambah, edit, atau hapus artikel berita</p>
            <div className="mt-4 p-4 bg-blue-900/30 rounded-lg border border-blue-500/30 max-w-2xl mx-auto">
              <p className="text-blue-300 text-sm">
                <strong>Info:</strong> Artikel yang sudah ada tidak akan dihapus saat menambahkan artikel baru.
                Semua artikel yang telah Anda buat sebelumnya akan tetap dipertahankan.
              </p>
              <p className="text-blue-300 text-sm mt-2">
                Untuk informasi lebih lanjut, lihat <a href="./ARTICLE_MANAGEMENT.md" target="_blank" className="text-pink-400 hover:underline">dokumentasi sistem</a>.
              </p>
            </div>
          </div>

          {/* Form untuk tambah/edit artikel */}
          <div className="bg-gray-900 rounded-2xl p-6 mb-12 border border-pink-500/20">
            <h3 className="text-xl font-bold mb-4">
              {editingId ? 'Edit Artikel' : 'Tambah Artikel Baru'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Judul Artikel</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Sumber</label>
                <input
                  type="text"
                  name="source"
                  value={formData.source}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">URL Artikel</label>
                <input
                  type="url"
                  name="url"
                  value={formData.url}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Deskripsi</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold transition-colors"
                >
                  {editingId ? 'Update Artikel' : 'Tambah Artikel'}
                </button>
                
                {editingId && (
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold transition-colors"
                  >
                    Batal
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Daftar artikel */}
          <div>
            <h3 className="text-xl font-bold mb-4">Daftar Artikel ({articles.length})</h3>
            {articles.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Belum ada artikel. Silakan tambahkan artikel baru.
              </div>
            ) : (
              <div className="grid gap-4">
                {[...articles].reverse().map((article) => (
                  <div key={article.id} className="bg-gray-900 rounded-2xl p-6 border border-pink-500/20">
                    <h4 className="text-lg font-bold mb-2">{article.title}</h4>
                    <p className="text-pink-500 text-sm mb-2">{article.source}</p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{article.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => handleEdit(article)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Hapus
                      </button>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Buka Link
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}