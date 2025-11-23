import React from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';

export default function ContentWriting() {
  const articles = [
    {
      title: 'Cek Komposisi Gel Sunscreen Serum Wardah, Tabir Surya ini Ternyata Diklaim Mampu Cerahkan Kulit',
      source: 'Suara Merdeka',
      url: 'https://www.suaramerdeka.com/gaya-hidup/0413596420/cek-komposisi-gel-sunscreen-serum-wardah-tabir-surya-ini-ternyata-diklaim-mampu-cerahkan-kulit?page=2',
      description: 'Ulasan komposisi dan klaim utama sunscreen Wardah.'
    },
    {
      title: 'Cushion yang Sudah Habis Jangan Langsung Dibuang! Pakai Trik dari YouTuber Ini untuk Ambil Isi yang Tersisa',
      source: 'Suara Merdeka',
      url: 'https://www.suaramerdeka.com/gaya-hidup/0413601436/cushion-yang-sudah-habis-jangan-langsung-dibuang-pakai-trik-dari-youtuber-ini-untuk-ambil-isi-yang-tersisa',
      description: 'Trik mengeluarkan sisa isi cushion dari YouTuber Christina Immanuel.'
    },
    {
      title: 'Tanpa Disadari 10 Makanan Ini Cepat Merusak Ginjal Jika Dikonsumsi Berlebihan, Ada Jengkol Hingga Belimbing',
      source: 'Suara Merdeka',
      url: 'https://www.suaramerdeka.com/gaya-hidup/0413603364/tanpa-disadari-10-makanan-ini-cepat-merusak-ginjal-jika-dikonsumsi-berlebihan-ada-jengkol-hingga-belimbing',
      description: 'Daftar makanan tinggi sodium, protein, gula, dan oksalat yang berisiko.'
    },
    {
      title: 'Kebiasaan Sepele Tapi Berbahaya, Ini Rentetan Penyakit yang Mengintai Kaum Rebahan',
      source: 'Suara Merdeka',
      url: 'https://www.suaramerdeka.com/gaya-hidup/0413609984/kebiasaan-sepele-tapi-berbahaya-ini-rentetan-penyakit-yang-mengintai-kaum-rebahan',
      description: 'Dampak gaya hidup sedentari: obesitas, diabetes, hingga risiko jantung.'
    },
    {
      title: 'Berhenti Mengganti Tidur Malam di Pagi Hari, Begini Arahan dari Dokter Tirta bagi Pekerja Shift Malam',
      source: 'Suara Merdeka',
      url: 'https://www.suaramerdeka.com/gaya-hidup/0413606706/berhenti-mengganti-tidur-malam-di-pagi-hari-begini-arahan-dari-dokter-tirta-bagi-pekerja-shift-malam',
      description: 'Alasan tidur malam tak bisa diganti pagi dan saran untuk shift malam.'
    },
    {
      title: 'Darurat! 10 Juta Gen Z Nganggur, Influencer Raymond Chin: Nggak Suka Dikekang',
      source: 'Suara Merdeka',
      url: 'https://www.suaramerdeka.com/nasional/0413607131/darurat-10-juta-gen-z-nganggur-influencer-raymond-chin-nggak-suka-dikekang',
      description: 'Empat masalah utama di balik pengangguran Gen Z menurut Raymond Chin.'
    },
    {
      title: 'Jangan Keliru, Bipolar Ternyata Tak Sama dengan Moody, Simak Penjelasan Dokter Emasuperr Berikut',
      source: 'Suara Merdeka',
      url: 'https://www.suaramerdeka.com/nasional/0413613717/jangan-keliru-bipolar-ternyata-tak-sama-dengan-moody-simak-penjelasan-dokter-emasuperr-berikut',
      description: 'Perbedaan moody dan bipolar, gejala, serta durasi fase yang membedakan.'
    },
    {
      title: 'Apa Itu Pallubasa Serigala? Makanan yang Disorot Usai Pemilik Restonya Kecelakaan di Makassar',
      source: 'Suara Merdeka',
      url: 'https://www.suaramerdeka.com/gaya-hidup/0413623496/apa-itu-pallubasa-serigala-makanan-yang-disorot-usai-pemilik-restonya-kecelakaan-di-makassar',
      description: 'Sejarah dan keunikan kuah gurih Pallubasa khas Makassar.'
    },
    {
      title: 'Ramai Skincare Mengandung Vitamin C dan Retinol, Ternyata Tidak Disarankan Untuk Kulit yang...',
      source: 'Suara Merdeka',
      url: 'https://www.suaramerdeka.com/gaya-hidup/0413632691/ramai-skincare-mengandung-vitamin-c-dan-retinol-ternyata-tidak-disarankan-untuk-kulit-yang',
      description: 'Kapan Vitamin C dan Retinol tepat digunakan sesuai kondisi kulit.'
    },
    {
      title: 'Semakin Tinggi Kandungan Niacinamide dalam Skincare Ternyata Berbahaya! Ini Penjelasan Dokter Kamila Jaidi',
      source: 'Suara Merdeka',
      url: 'https://www.suaramerdeka.com/gaya-hidup/0413633947/semakin-tinggi-kandungan-niacinamide-dalam-skincare-ternyata-berbahaya-ini-penjelasan-dokter-kamila-jaidi',
      description: 'Niacinamide efektif di ≤5%, dosis tinggi berisiko iritasi kulit.'
    },
    {
      title: 'Bahaya Tersembunyi Hydroquinone, Flek Hitam Hilang Ochronosis Muncul',
      source: 'Suara Merdeka',
      url: 'https://www.suaramerdeka.com/gaya-hidup/0413638122/bahaya-tersembunyi-hydroquinone-flek-hitam-hilang-ocronosis-muncul',
      description: 'Risiko penggunaan hydroquinone jangka panjang dan efek ocronosis.'
    },
    {
      title: '10 Ide Usaha Sampingan Mahasiswa, Ini Hasilkan Cuan dari Guru Privat hingga Jual Makanan',
      source: 'Suara Merdeka',
      url: 'https://www.suaramerdeka.com/ekonomi/0413672125/10-ide-usaha-sampingan-mahasiswa-ini-hasilkan-cuan-dari-guru-privat-hingga-jual-makanan',
      description: 'Pilihan side hustle mahasiswa untuk menambah pemasukan.'
    },
    {
      title: 'Tren Minuman Manis Picu Sederet Masalah Kesehatan, Dokter Tirta Suarakan Pentingnya Air Putih',
      source: 'Suara Merdeka',
      url: 'https://www.suaramerdeka.com/gaya-hidup/0413675792/tren-minuman-manis-picu-sederet-masalah-kesehatan-dokter-tirta-suarakan-pentingnya-air-putih',
      description: 'Mengurangi minuman manis dan memperbanyak air putih untuk kesehatan.'
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="py-6 border-b border-pink-500/20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Content Writing</h1>
          <a href="#/" className="inline-flex items-center text-pink-500 hover:text-pink-400 font-semibold">
            <ArrowLeft className="mr-2 w-4 h-4" /> Kembali ke Beranda
          </a>
        </div>
      </header>

      <main className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Artikel <span className="text-pink-500">Pilihan</span>
            </h2>
            <p className="text-gray-400 mt-3">Beberapa artikel yang relevan dengan konten tulisan.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((a, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-gray-900 to-black border border-pink-500/20 rounded-2xl overflow-hidden hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:-translate-y-2">
                <div className="p-6 space-y-3">
                  <div className="text-sm text-pink-500 font-semibold">{a.source}</div>
                  <h3 className="text-lg sm:text-xl font-bold group-hover:text-pink-500 transition-colors duration-300 break-words">{a.title}</h3>
                  <p className="text-gray-400 break-words">{a.description}</p>
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 font-semibold inline-flex items-center group-hover:gap-2 transition-all pt-2"
                  >
                    Buka Artikel <ExternalLink className="ml-1 w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}