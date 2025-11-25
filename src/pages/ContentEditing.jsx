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
    {
      title: 'Usung Tema Postmodern, Teater Gapus Gelar Pentas Akhir Tahun',
      url: 'https://persmercusuar.com/2023/12/23/usung-tema-postmodern-teater-gapus-gelar-pentas-akhir-tahun/',
    },
    {
      title: 'Parkir Masjid Nuruzzaman Berbayar, Pantaskah?',
      url: 'https://persmercusuar.com/2023/10/12/parkir-masjid-nuruzzaman-berbayar-pantaskah/',
    },
    {
      title: 'Diikuti UI, UGM, PKN STAN, dan 97 Universitas, Serta Sekolah, HMA UNAIR Sukses Gelar AAC 2023',
      url: 'https://persmercusuar.com/2023/09/29/diikuti-ui-ugm-pkn-stan-dan-97-universitas-serta-sekolah-hma-unair-sukses-gelar-aac-2023/',
    },
    {
      title: 'Bisa Melukai Diri Sendiri, Inilah Sisi Gelap Terlalu Mandiri',
      url: 'https://persmercusuar.com/2023/11/03/bisa-melukai-diri-sendiri-inilah-sisi-gelap-terlalu-mandiri/',
    },
    {
      title: 'Diguyur Hujan Buatan, Kualitas Udara Jakarta Masih Begini-begini Saja',
      url: 'https://persmercusuar.com/2023/09/04/diguyur-hujan-buatan-kualitas-udara-jakarta-masih-begini-begini-saja/',
    },
    {
      title: 'Atasi Jukir Liar, Pemkot Surabaya Larang Warga Bayar Parkir Tanpa Karcis',
      url: 'https://persmercusuar.com/2023/08/15/atasi-jukir-liar-pemkot-surabaya-larang-warga-bayar-parkir-tanpa-karcis/',
    },
    {
      title: 'Imajinair Mengabdi, Kembangkan Potensi Daerah Asal',
      url: 'https://persmercusuar.com/2023/07/27/imajinair-mengabdi-kembangkan-potensi-daerah-asal/',
    },
    {
      title: 'Begini Kondisi Rumput di JIS yang Tuai Pro Kontra',
      url: 'https://persmercusuar.com/2023/07/13/begini-kondisi-rumput-di-jis-yang-tuai-pro-kontra/',
    },
    {
      title: 'Pengmas Internasional: Pengabdian Sekaligus Pengenalan Budaya Indonesia',
      url: 'https://persmercusuar.com/2023/06/19/pengmas-internasional-pengabdian-sekaligus-pengenalan-budaya-indonesia/',
    },
    {
      title: 'Kumpulan Liputan tentang AHY di Pers Mercusuar',
      url: 'https://persmercusuar.com/?s=AHY',
    },
    {
      title: 'Marak Terjadi di Korea, Bagaimana Praktik Misogini di Indonesia?',
      url: 'https://persmercusuar.com/2023/04/30/marak-terjadi-di-korea-bagaimana-praktik-misogini-di-indonesia/',
    },
    {
      title: 'Filantropi: Menggapai Kebahagiaan Jangka Pendek dan Jangka Panjang',
      url: 'https://persmercusuar.com/2023/03/28/filantropi-menggapai-kebahagiaan-jangka-pendek-dan-jangka-panjang/',
    },
    {
      title: 'Cantik Itu Luka, Karya Sastra Epik yang Wajib Dibaca',
      url: 'https://persmercusuar.com/2023/03/28/cantik-itu-luka-karya-sastra-epik-yang-wajib-dibaca/',
    },
    {
      title: 'Kumpulan Tulisan Lain (Google Drive Folder)',
      url: 'https://drive.google.com/drive/mobile/folders/14tHSKSr452U9m5v6Xv8V5_KNVHuszrKw/1cbnSy0gkBkcyilElRYBKQSrgEt8sqL6D?fbclid=PAY2xjawHhtHdleHRuA2FlbQIxMQABptId2_N4HmqMKpVGVu0YdT_kLDDijh92awfLXzDZ9PlS03fZ6E_QS6C4OA_aem_9HjnD3hrf4AmiV4CChFANg&sort=13&direction=a',
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
