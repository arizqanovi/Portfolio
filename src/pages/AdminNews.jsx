import React, { useState, useEffect } from 'react';
import { ArrowLeft, LogOut, Plus, Trash2, Settings, CheckSquare, Square, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AdminNews() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [articles, setArticles] = useState(() => {
    const savedArticles = localStorage.getItem('newsArticles');
    if (savedArticles) return JSON.parse(savedArticles);

    const initialArticles = [
      {
        id: 1,
        title: "Pertamina Wajibkan Barcode untuk Pembelian Pertalite dan Solar, Begini Cara Mendaftarnya",
        source: "Suara Merdeka",
        url: "https://www.suaramerdeka.com/otomotif/0413682619/pertamina-wajibkan-barcode-untuk-pembelian-pertalite-dan-solar-begini-cara-mendaftarnya",
        description: "Pertamina menerapkan kebijakan baru yang mewajibkan penggunaan barcode untuk pembelian BBM jenis Pertalite dan Solar mulai bulan ini."
      }
    ];
    localStorage.setItem('newsArticles', JSON.stringify(initialArticles));
    return initialArticles;
  });

  const [formData, setFormData] = useState({
    title: '',
    source: '',
    url: '',
    description: ''
  });
  const [editingId, setEditingId] = useState(null);

  const [sources, setSources] = useState(() => {
    const savedSources = localStorage.getItem('newsSources');
    if (savedSources) return JSON.parse(savedSources);

    const initialSources = ["Suara Merdeka"];
    localStorage.setItem('newsSources', JSON.stringify(initialSources));
    return initialSources;
  });

  const [newSource, setNewSource] = useState('');
  const [showSourceManager, setShowSourceManager] = useState(false);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('newsArticles', JSON.stringify(articles));
  }, [articles]);

  useEffect(() => {
    localStorage.setItem('newsSources', JSON.stringify(sources));
  }, [sources]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddSource = (e) => {
    e.preventDefault();
    if (newSource.trim() && !sources.includes(newSource.trim())) {
      setSources(prev => [...prev, newSource.trim()]);
      setNewSource('');
    }
  };

  const handleDeleteSource = (sourceName) => {
    if (window.confirm(`Hapus sumber "${sourceName}"? Berita yang terkait dengan sumber ini tidak akan dihapus otomatis.`)) {
      setSources(prev => prev.filter(s => s !== sourceName));
    }
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
    if (window.confirm('Hapus artikel ini?')) {
      setArticles(prev => prev.filter(article => article.id !== id));
      if (editingId === id) {
        setEditingId(null);
        setFormData({ title: '', source: '', url: '', description: '' });
      }
    }
  };

  const handleBulkDelete = () => {
    if (selectedIds.length === 0) return;
    if (window.confirm(`Hapus ${selectedIds.length} artikel terpilih?`)) {
      setArticles(prev => prev.filter(article => !selectedIds.includes(article.id)));
      setSelectedIds([]);
      setIsSelectionMode(false);
    }
  };

  const handleDeleteAll = () => {
    if (window.confirm('PERINGATAN: Hapus SEMUA artikel? Tindakan ini tidak dapat dibatalkan.')) {
      setArticles([]);
      setSelectedIds([]);
      setIsSelectionMode(false);
    }
  };

  const toggleSelectArticle = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
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
      <header className="py-3 sm:py-4 md:py-6 border-b border-pink-500/20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">Admin Berita</h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto">
            <button
              onClick={() => setShowSourceManager(!showSourceManager)}
              className="inline-flex items-center text-pink-500 hover:text-pink-400 font-semibold text-xs sm:text-sm md:text-base mr-2"
            >
              <Settings className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
              {showSourceManager ? 'Kelola Berita' : 'Kelola Sumber'}
            </button>
            <a href="#/" className="inline-flex items-center text-pink-500 hover:text-pink-400 font-semibold text-xs sm:text-sm md:text-base">
              <ArrowLeft className="mr-1 w-3 h-3 sm:mr-1.5 sm:w-4 sm:h-4 md:mr-2 md:w-4 md:h-4" /> Kembali ke Beranda
            </a>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-colors"
            >
              <LogOut className="mr-1 w-3 h-3 sm:mr-1.5 sm:w-4 sm:h-4 md:mr-2 md:w-4 md:h-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-6 md:mb-8">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              {showSourceManager ? (
                <>Kelola <span className="text-pink-500">Sumber Berita</span></>
              ) : (
                <>Kelola <span className="text-pink-500">Berita</span></>
              )}
            </h2>
            <p className="text-gray-400 mt-2 text-xs sm:text-sm md:text-base">
              {showSourceManager ? 'Tambah atau hapus sumber kategori berita' : 'Tambah, edit, atau hapus artikel berita'}
            </p>
          </div>

          {showSourceManager ? (
            <div className="bg-gray-900 rounded-2xl p-3 sm:p-4 md:p-6 mb-6 sm:mb-8 md:mb-12 border border-pink-500/20 max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Daftar Sumber</h3>

              <form onSubmit={handleAddSource} className="flex gap-2 mb-6">
                <input
                  type="text"
                  value={newSource}
                  onChange={(e) => setNewSource(e.target.value)}
                  placeholder="Nama Sumber Baru (misal: Kompas)"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold transition-colors text-sm flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" /> Tambah
                </button>
              </form>

              <div className="space-y-2">
                {sources.map(source => (
                  <div key={source} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 group">
                    <span className="font-medium">{source}</span>
                    <button
                      onClick={() => handleDeleteSource(source)}
                      className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                      title="Hapus Sumber"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                {sources.length === 0 && (
                  <p className="text-center text-gray-500 py-4">Belum ada sumber yang ditambahkan.</p>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <button
                  onClick={() => setShowSourceManager(false)}
                  className="w-full py-2 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors text-sm"
                >
                  Kembali ke Pengelolaan Berita
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Form untuk tambah/edit artikel */}
              <div className="bg-gray-900 rounded-2xl p-3 sm:p-4 md:p-6 mb-6 sm:mb-8 md:mb-12 border border-pink-500/20">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                  {editingId ? 'Edit Artikel' : 'Tambah Artikel Baru'}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm md:text-base font-medium mb-1">Judul Artikel</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-xs sm:text-sm md:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm md:text-base font-medium mb-1">Sumber</label>
                    <div className="flex gap-2">
                      <select
                        name="source"
                        value={formData.source}
                        onChange={handleInputChange}
                        className="flex-1 px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-xs sm:text-sm md:text-base"
                        required
                      >
                        <option value="">Pilih Sumber</option>
                        {sources.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={() => setShowSourceManager(true)}
                        className="px-3 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 text-pink-500"
                        title="Tambah Sumber Baru"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm md:text-base font-medium mb-1">URL Artikel</label>
                    <input
                      type="url"
                      name="url"
                      value={formData.url}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-xs sm:text-sm md:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm md:text-base font-medium mb-1">Deskripsi</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-xs sm:text-sm md:text-base"
                      required
                    />
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 pt-2">
                    <button
                      type="submit"
                      className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold transition-colors text-xs sm:text-sm md:text-base flex-1 min-w-[100px]"
                    >
                      {editingId ? 'Update Artikel' : 'Tambah Artikel'}
                    </button>

                    {editingId && (
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold transition-colors text-xs sm:text-sm md:text-base flex-1 min-w-[80px]"
                      >
                        Batal
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Daftar artikel */}
              <div className="mt-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                    Daftar Artikel ({articles.length})
                  </h3>

                  <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                    {articles.length > 0 && (
                      <>
                        <button
                          onClick={() => {
                            setIsSelectionMode(!isSelectionMode);
                            setSelectedIds([]);
                          }}
                          className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${isSelectionMode
                            ? 'bg-pink-600 text-white'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                          {isSelectionMode ? <X size={16} /> : <CheckSquare size={16} />}
                          {isSelectionMode ? 'Batal Pilih' : 'Pilih Banyak'}
                        </button>

                        {isSelectionMode && selectedIds.length > 0 && (
                          <button
                            onClick={handleBulkDelete}
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold text-sm transition-colors"
                          >
                            <Trash2 size={16} /> Hapus ({selectedIds.length})
                          </button>
                        )}

                        <button
                          onClick={handleDeleteAll}
                          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-900/30 hover:bg-red-900/50 text-red-500 border border-red-500/30 rounded-lg font-semibold text-sm transition-colors"
                        >
                          Hapus Semua
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {articles.length === 0 ? (
                  <div className="text-center py-6 sm:py-8 text-gray-500">
                    Belum ada artikel. Silakan tambahkan artikel baru.
                  </div>
                ) : (
                  <div className="grid gap-3 sm:gap-4">
                    {[...articles].reverse().map((article) => {
                      const isSelected = selectedIds.includes(article.id);
                      return (
                        <div
                          key={article.id}
                          className={`bg-gray-900 rounded-2xl p-3 sm:p-4 md:p-6 border transition-all relative ${isSelected ? 'border-pink-500 bg-pink-500/5' : 'border-pink-500/20'
                            }`}
                          onClick={() => isSelectionMode && toggleSelectArticle(article.id)}
                        >
                          {isSelectionMode && (
                            <div className="absolute top-4 right-4 z-10">
                              {isSelected ? (
                                <CheckSquare className="text-pink-500 w-6 h-6" />
                              ) : (
                                <Square className="text-gray-600 w-6 h-6" />
                              )}
                            </div>
                          )}

                          <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 pr-10">{article.title}</h4>
                          <p className="text-pink-500 text-xs sm:text-sm mb-2">{article.source}</p>
                          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{article.description}</p>

                          {!isSelectionMode && (
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                              <button
                                onClick={(e) => { e.stopPropagation(); handleEdit(article); }}
                                className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex-1 min-w-[60px]"
                              >
                                Edit
                              </button>
                              <button
                                onClick={(e) => { e.stopPropagation(); handleDelete(article.id); }}
                                className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-red-600 hover:bg-red-700 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex-1 min-w-[60px]"
                              >
                                Hapus
                              </button>
                              <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex-1 min-w-[80px] text-center"
                              >
                                Buka Link
                              </a>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}