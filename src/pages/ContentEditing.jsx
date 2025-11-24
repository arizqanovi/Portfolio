import React from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';

export default function ContentEditing() {
  const links = [
    {
      title: 'Matahari dan Mantel dalam Cerita',
      url: 'https://nyangkem.id/esai/matahari-dan-mantel-dalam-cerita/',
    },
    {
      title: 'Beda Jalan Menuju Sukses: Mahasiswa Kupu-kupu dan Kura-kura',
      url: 'https://nyangkem.id/esai/beda-jalan-menuju-sukses-mahasiswa-kupu-kupu-dan-kura-kura/',
    },
    {
      title: 'Membesar-besarkan Kasus Pelecehan Seksual di Ponpes Itu Perlu',
      url: 'https://nyangkem.id/esai/membesar-besarkan-kasus-pelecehan-seksual-di-ponpes-itu-perlu/',
    },
    {
      title: 'Tak Ada Tempat untuk Luka, Bahkan Pascakematian Itu Sendiri',
      url: 'https://nyangkem.id/esai/tak-ada-tempat-untuk-luka-bahkan-pascakematian-itu-sendiri/',
    },
    {
      title: 'Mencari Filsuf Tak Perlu Jauh-jauh, Ada Ki Ageng Suryomentaram dari Tanah Sendiri',
      url: 'https://nyangkem.id/esai/mencari-filsuf-tak-perlu-jauh-jauh-ada-ki-ageng-suryomentaram-dari-tanah-sendiri/',
    },
    {
      title: 'Hidup di Solo Hati Tetap Tenang Meski Kampus Ramai dan Jalanan Macet',
      url: 'https://nyangkem.id/esai/hidup-di-solo-hati-tetap-tenang-meski-kampus-ramai-dan-jalanan-macet/',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="py-6 border-b border-pink-500/20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Content Editing</h1>
          <a href="#/" className="inline-flex items-center text-pink-500 hover:text-pink-400 font-semibold">
            <ArrowLeft className="mr-2 w-4 h-4" /> Kembali ke Beranda
          </a>
        </div>
      </header>

      <main className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Edited <span className="text-pink-500">Articles</span>
            </h2>
            <p className="text-gray-400 mt-3">Beberapa artikel yang pernah dikerjakan dalam proses content editing.</p>
          </div>

          <div className="space-y-4">
            {links.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gradient-to-br from-gray-900 to-black border border-pink-500/20 rounded-2xl px-6 py-4 hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-gray-100 font-semibold text-sm sm:text-base group-hover:text-pink-400 transition-colors break-words">
                    {item.title}
                  </p>
                  <ExternalLink className="w-4 h-4 text-pink-400 group-hover:rotate-12 transition-transform flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
