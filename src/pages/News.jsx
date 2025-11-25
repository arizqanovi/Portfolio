import React from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export default function News() {
  // Daftar berita dengan title, source, dan description

  const newsData = [
    {
      title: "Pertamina Wajibkan Barcode untuk Pembelian Pertalite dan Solar, Begini Cara Mendaftarnya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/otomotif/0413682619/pertamina-wajibkan-barcode-untuk-pembelian-pertalite-dan-solar-begini-cara-mendaftarnya",
      description: "Pertamina menerapkan kebijakan baru yang mewajibkan penggunaan barcode untuk pembelian BBM jenis Pertalite dan Solar mulai bulan ini."
    },
    {
      title: "Pasar Malam Suncity Festival Madiun Diperpanjang Hingga 12 Oktober 2024, Nikmati Beragam Wahana dan Kuliner",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/gaya-hidup/0413684636/pasar-malam-suncity-festival-madiun-diperpanjang-hingga-12-oktober-2024-nikmati-beragam-wahana-dan-kuliner",
      description: "Pemerintah Kota Madiun memperpanjang waktu pelaksanaan Pasar Malam Suncity Festival hingga pertengahan Oktober mendatang."
    },
    {
      title: "Seorang Perempuan Ditemukan Terjatuh di Bawah Jembatan Kebonsari Madiun, Diduga Korban Tabrak Lari",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413686720/seorang-perempuan-ditemukan-terjatuh-di-bawah-jembatan-kebonsari-madiun-diduga-korban-tabrak-lari",
      description: "Tim SAR mengevakuasi seorang perempuan yang ditemukan terjatuh di bawah jembatan Kebonsari, Madiun pada Minggu pagi."
    },
    {
      title: "Informasi Lowongan Kerja Trans 7, Mahasiswa Tingkat Akhir Bisa Daftar",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/ekonomi/0413683423/informasi-lowongan-kerja-trans-7-mahasiswa-tingkat-akhir-bisa-daftar",
      description: "Trans 7 membuka lowongan kerja terbaru untuk posisi tertentu yang terbuka bagi mahasiswa tingkat akhir dari berbagai jurusan."
    },
    {
      title: "Bus Transjatim Koridor Surabaya-Bangkalan Jadi Sasaran Vandalisme di Suramadu, Rekaman CCTV Viral",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413689791/bus-transjatim-koridor-surabaya-bangkalan-jadi-sasaran-vandalisme-di-suramadu-rekaman-cctv-viral",
      description: "Beberapa unit bus Transjatim koridor Surabaya-Bangkalan menjadi sasaran vandalisme saat melintasi jembatan Suramadu."
    },
    {
      title: "Marak Juru Parkir Liar, Dishub Surabaya Tegaskan Warga Wajib Minta Karcis Parkir Resmi",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413691132/marak-juru-parkir-liar-dishub-surabaya-tegaskan-warga-wajib-minta-karcis-parkir-resmi",
      description: "Dinas Perhubungan Kota Surabaya kembali menegaskan pentingnya masyarakat menggunakan fasilitas parkir resmi."
    },
    {
      title: "AHY Raih Gelar Doktor di Unair, Intip Judul Disertasinya di Sini",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413693263/ahy-raih-gelar-doktor-di-unair-intip-judul-disertasinya-di-sini",
      description: "Agus Harimurti Yudhoyono resmi meraih gelar doktor di Universitas Airlangga setelah menyelesaikan studi selama beberapa tahun."
    },
    {
      title: "Peparnas XVII Solo 2024, Ajang Unjuk Gigi Atlet Disabilitas Indonesia, 20 Cabang Olahraga Dipertandingkan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/olahraga/0413697381/peparnas-xvii-solo-2024-ajang-unjuk-gigi-atlet-disabilitas-indonesia-20-cabang-olahraga-dipertandingkan",
      description: "Pekan Paralimpik Nasional (Peparnas) XVII tahun 2024 akan digelar di Solo dengan mempertandingkan 20 cabang olahraga."
    },
    {
      title: "Anies Baswedan Pasang Tagar #OpenToWork di LinkedIn, Warganet Heboh Persaingan Makin Ketat",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413698856/anies-baswedan-pasang-tagar-opentowork-di-linkedin-warganet-heboh-persaingan-makin-ketat",
      description: "Gubernur nonaktif DKI Jakarta Anies Baswedan memasang tagar #OpenToWork di akun LinkedIn pribadinya."
    },
    {
      title: "Para Atlet Disabilitas dalam Peparnas XVII, Ada Lomba Catur Penyandang Tunanetra",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/olahraga/0413700546/para-atlet-disabilitas-dalam-peparnas-xvii-ada-lomba-catur-penyandang-tunanetra",
      description: "Dalam ajang Peparnas XVII tahun ini, para atlet tunanetra juga akan berkompetisi dalam cabang olahraga catur."
    },
    {
      title: "Matahari Tepat di Atas Kepala, Siap-siap Surabaya akan Alami Hari Tanpa Bayangan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413705942/matahari-tepat-di-atas-kepala-siap-siap-surabaya-akan-alami-hari-tanpa-bayangan",
      description: "Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) mengumumkan fenomena langka yang akan terjadi di Surabaya."
    },
    {
      title: "Madiun dan Sekitarnya akan Mengalami Hari Tanpa Bayangan, Simak Tanggalnya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413706611/madiun-dan-sekitarnya-akan-mengalami-hari-tanpa-bayangan-simak-tanggalnya",
      description: "Warga Kota Madiun dan sekitarnya diminta bersiap menghadapi fenomena langka hari tanpa bayangan pada tanggal tertentu."
    },
    {
      title: "Informasi Lowongan Pekerjaan Penempatan Surabaya, Ada Content Creator hingga Beauty",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413707180/informasi-lowongan-pekerjaan-penempatan-surabaya-ada-content-creator-hingga-beauty",
      description: "Sejumlah perusahaan di Surabaya membuka lowongan pekerjaan untuk berbagai posisi menarik termasuk content creator dan beauty specialist."
    },
    {
      title: "Ingin Mengajukan Pindah Memilih untuk Pilkada November Mendatang, Ini Dokumen yang Dibutuhkan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413712085/ingin-mengajukan-pindah-memilih-untuk-pilkada-november-mendatang-ini-dokumen-yang-dibutuhkan",
      description: "Bagi pemilih yang ingin mengajukan pindah memilih pada Pilkada November 2024, ada beberapa dokumen yang harus disiapkan."
    },
    {
      title: "Klasifikasi Usia Pemilih di Pilkada 2024 Kabupaten Madiun, Wah Ternyata Kelompok Gen Z Ada 100 Ribu Orang",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413712269/klasifikasi-usia-pemilih-di-pilkada-2024-kabupaten-madiun-wah-ternyata-kelompok-gen-z-ada-100-ribu-orang",
      description: "Komisi Pemilihan Umum (KPU) Kabupaten Madiun mengklasifikasikan usia pemilih untuk Pilkada 2024, ternyata Gen Z mayoritas."
    },
    {
      title: "Hari Kesehatan Mental Sedunia, RSJ Menur Layani Konsultasi Gangguan Belajar hingga Kecanduan Belanja Online",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/gaya-hidup/0413713133/hari-kesehatan-mental-sedunia-rsj-menur-layani-konsultasi-gangguan-belajar-hingga-kecanduan-belanja-online",
      description: "Rumah Sakit Jiwa dr Soetomo (RSJ Menur) Surabaya memberikan layanan konsultasi kesehatan mental secara gratis dalam rangka Hari Kesehatan Mental Sedunia."
    },
    {
      title: "Pameran Rokok Terbesar Se-Asia di Grand City Surabaya Tuai Banyak Kecaman",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/gaya-hidup/0413714002/pameran-rokok-terbesar-se-asia-di-grand-city-surabaya-tuai-banyak-kecaman",
      description: "Pameran rokok terbesar se-Asia yang digelar di Grand City Surabaya menuai banyak kecaman dari berbagai kalangan."
    },
    {
      title: "Cair Oktober 2024, Begini Cara Cek Bantuan PIP Kemendikbud Rp18 Juta",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0413719113/cair-oktober-2024-begini-cara-cek-bantuan-pip-kemendikbud-rp18-juta",
      description: "Bantuan Program Indonesia Pintar (PIP) Kemendikbud sebesar Rp18 juta akan cair pada Oktober 2024 mendatang."
    },
    {
      title: "KPU Jatim Gelar Kompetisi Jurnalistik, Total Hadiah Rp280 Juta, Ini Syarat dan Ketentuannya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413719742/kpu-jatim-gelar-kompetisi-jurnalistik-total-hadiah-rp280-juta-ini-syarat-dan-ketentuannya",
      description: "Komisi Pemilihan Umum (KPU) Provinsi Jawa Timur menggelar kompetisi jurnalistik dengan total hadiah mencapai Rp280 juta."
    },
    {
      title: "KPU Jatim Buka Program Magang untuk Mahasiswa, Ada Posisi Penulis hingga Fotografer",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413726534/kpu-jatim-buka-program-magang-untuk-mahasiswa-ada-posisi-penulis-hingga-fotografer",
      description: "KPU Provinsi Jawa Timur kembali membuka program magang untuk mahasiswa dengan berbagai posisi yang tersedia."
    },
    {
      title: "Hati-hati Pemberi dan Penerima Politik Uang Bisa Dipidana 3 Tahun Penjara dan Denda Rp 200 Juta",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413726288/hati-hati-pemberi-dan-penerima-politik-uang-bisa-dipidana-3-tahun-penjara-dan-denda-rp-200-juta",
      description: "Bawaslu mengingatkan masyarakat tentang larangan keras politik uang yang dapat berujung pada pidana penjara dan denda."
    },
    {
      title: "Cuaca Jatim Panas Menyengat, Kapan Masuk Musim Hujan? Ini Prediksi BMKG",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413726919/cuaca-jatim-panas-menyengat-kapan-masuk-musim-hujan-ini-prediksi-bmkg",
      description: "Badan Meteorologi Klimatologi dan Geofisika (BMKG) mengeluarkan prediksi terkait masuknya musim hujan di wilayah Jawa Timur."
    },
    {
      title: "Anies Baswedan Menikmati Pahlawan Street Center Kota Madiun, Bisa Keliling Tiga Benua",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413728815/anies-baswedan-menikmati-pahlawan-street-center-kota-madiun-bisa-keliling-tiga-benua",
      description: "Gubernur nonaktif DKI Jakarta Anies Baswedan tampak menikmati suasana Pahlawan Street Center di Kota Madiun."
    },
    {
      title: "4 Tokoh Nasional Ini Ternyata Dulunya Santri dari Pesantren Mana Saja?",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413772364/4-tokoh-nasional-ini-ternyata-dulunya-santri-dari-pesantren-mana-saja",
      description: "Empat tokoh nasional ternama ini memiliki latar belakang sebagai santri di pesantren-pesantren terkenal di Indonesia."
    },
    {
      title: "Menjabat Menteri Keuangan di Era 3 Presiden, Ini Kunci Kehebatan Sri Mulyani",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413765243/menjabat-menteri-keuangan-di-era-3-presiden-ini-kunci-kehebatan-sri-mulyani",
      description: "Sri Mulyani Indrawati berhasil menjalani peran penting sebagai Menteri Keuangan selama era tiga presiden berbeda."
    },
    {
      title: "Mahasiswa Boleh Pakai ChatGPT, Kemdikbudristek Luncurkan Panduan Lengkap Gunakan GenAI dengan Bijak",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0413736762/mahasiswa-boleh-pakai-chatgpt-kemdikbudristek-luncurkan-panduan-lengkap-gunakan-genai-dengan-bijak",
      description: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi mengeluarkan panduan resmi penggunaan teknologi Generative AI oleh mahasiswa."
    },
    {
      title: "Muncul Ledakan dan Kobaran Api di Smelter Freeport Gresik, Pekerja Berlarian",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413738649/muncul-ledakan-dan-kobaran-api-di-smelter-freeport-gresik-pekerja-berlarian",
      description: "Sebuah ledakan disertai kobaran api terjadi di fasilitas smelter PT Freeport Indonesia di Gresik, menyebabkan kepanikan di lokasi."
    },
    {
      title: "BMKG Jatim Prediksi Hujan Lebat Akhir Pekan, Waspadai Banjir dan Kenaikan Air Sungai",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413768584/bmkg-jatim-prediksi-hujan-lebat-akhir-pekan-waspadai-banjir-dan-kenaikan-air-sungai",
      description: "Badan Meteorologi, Klimatologi, dan Geofisika memprediksi hujan lebat akan mengguyur wilayah Jawa Timur akhir pekan ini."
    },
    {
      title: "Polres Madiun Gelar Operasi Zebra 2024, Ini Poin-poin Pelanggaran yang Ditindak",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413744376/polres-madiun-gelar-operasi-zebra-2024-ini-poin-poin-pelanggaran-yang-ditindak",
      description: "Polres Madiun menggelar Operasi Zebra 2024 untuk meningkatkan keselamatan dan ketertiban berlalu lintas di wilayah hukumnya."
    },
    {
      title: "Ditunjuk Prabowo Jadi Menteri Pendidikan Dasar dan Menengah, Ini Sosok Cendekiawan Muslim Abdul Muti",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413742478/ditunjuk-prabowo-jadi-menteri-pendidikan-dasar-dan-menengah-ini-sosok-cendekiawan-muslim-abdul-muti",
      description: "Abdul Muti ditunjuk Presiden terpilih Prabowo Subianto sebagai Menteri Pendidikan Dasar dan Menengah dalam kabinet baru."
    },
    {
      title: "Anak Pertama Kaesang Lahir, Ini Deretan Nama Unik Cucu Jokowi",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413744295/anak-pertama-kaesang-lahir-ini-deretan-nama-unik-cucu-jokowi",
      description: "Buah hati pertama dari pasangan Kaesang Pangarep dan Erina Gudono telah lahir, menambah deretan nama unik dalam keluarga besar Jokowi."
    },
    {
      title: "Enam Hari Pencarian Pendaki yang Hilang di Gunung Wilis Ditemukan Tewas di Dalam Jurang",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413752128/enam-hari-pencarian-pendaki-yang-hilang-di-gunung-wilis-ditemukan-tewas-di-dalam-jurang",
      description: "Setelah pencarian selama enam hari, tim SAR akhirnya menemukan pendaki yang hilang di Gunung Wilis dalam kondisi tidak bernyawa."
    },
    {
      title: "Penyebab Tewasnya Pendaki di Gunung Wilis Terungkap, Diduga Terpeleset Saat BAB",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413752892/penyebab-tewasnya-pendaki-di-gunung-wilis-terungkap-diduga-terpeleset-saat-bab",
      description: "Hasil investigasi menunjukkan bahwa penyebab kematian pendaki di Gunung Wilis diduga terpeleset saat melakukan aktivitas pribadi."
    },
    {
      title: "KAI Upgrade Interior Kereta ke Generasi Baru, Perjalanan Makin Nyaman Tanpa Adu Dengkul",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/ekonomi/0413758334/kai-upgrade-interior-kereta-ke-generasi-baru-perjalanan-makin-nyaman-tanpa-adu-dengkul",
      description: "PT Kereta Api Indonesia (KAI) melakukan upgrade besar-besaran terhadap interior kereta api untuk meningkatkan kenyamanan penumpang."
    },
    {
      title: "Kereta Relasi Solo-Madiun Telah Masuk Uji Coba, Akses Lebih Cepat ke Bandara Adi Soemarmo",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413758167/kereta-relasi-solo-madiun-telah-masuk-uji-coba-akses-lebih-cepat-ke-bandara-adi-soemarmo",
      description: "Kereta api dengan rute Solo-Madiun telah memasuki tahap uji coba, memberikan akses lebih cepat ke Bandara Adi Soemarmo."
    },
    {
      title: "Gelar Pendidikan Calon Menteri Kabinet Prabowo-Ganjar, Sarjana hingga Honoris Causa",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413762773/gelar-pendidikan-calon-menteri-kabinet-prabowo-ganjar-sarjana-hingga-honoris-causa",
      description: "Presiden terpilih Prabowo Subianto dan Wakil Presiden terpilih Ganjar Pranowo melakukan pendidikan khusus bagi calon anggota kabinet mereka."
    },
    {
      title: "Prabowo Presiden Terpilih RI Rayakan Ultah ke-73 Jelang Pelantikan, Siapa Sosok Penting di Balik Perjalanan Hidupnya?",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413757382/prabowo-presiden-terpilih-ri-rayakan-ulang-tahun-ke-73-jelang-pelantikan-siapa-sosok-penting-di-balik-perjalanan-hidupnya",
      description: "Presiden terpilih Republik Indonesia Prabowo Subianto merayakan ulang tahun ke-73 menjelang pelantikannya pada Oktober 2024 mendatang."
    },
    {
      title: "Wilmar Nabati Buka Lowongan Kerja Terbuka untuk Fresh Graduate Semua Jurusan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413766571/wilmar-nabati-buka-lowongan-kerja-terbuka-untuk-fresh-graduate-semua-jurusan",
      description: "PT Wilmar Nabati Indonesia membuka kesempatan kerja bagi fresh graduate dari semua jurusan untuk bergabung dalam tim profesional mereka."
    },
    {
      title: "Sejumlah Polisi di Trenggalek Kelebihan Berat Badan, Wajib Jalani Program Diet",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413764477/sejumlah-polisi-di-trenggalek-kelebihan-berat-badan-wajib-jalani-program-diet",
      description: "Personel Polres Trenggalek yang dinyatakan kelebihan berat badan wajib mengikuti program diet khusus demi menjaga kesehatan dan penampilan."
    },
    {
      title: "Kena Tilang Tapi Lupa Bawa SIM, Begini Sanksinya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413765111/kena-tilang-tapi-lupa-bawa-sim-begini-sanksinya",
      description: "Banyak pengendara kendaraan bermotor yang terkena tilang karena lupa membawa SIM, berikut penjelasan lengkap mengenai sanksi yang berlaku."
    },
    {
      title: "Filosofi Logo Hari Santri Nasional 2024, Ketahanan Menghadapi Tantangan Masa Depan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413770864/filosofi-logo-hari-santri-nasional-2024-ketahanan-menghadapi-tantangan-masa-depan",
      description: "Logo Hari Santri Nasional 2024 memiliki filosofi mendalam tentang ketahanan umat dalam menghadapi tantangan masa depan."
    },
    {
      title: "Lagu Hari Santri Nasional 2024 Ternyata Ciptaan Menag Yaqut, Begini Liriknya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413771452/lagu-hari-santri-nasional-2024-ternyata-ciptaan-menag-yaqut-begini-liriknya",
      description: "Menteri Agama Yaqut Cholil Qoumas menciptakan lagu resmi Hari Santri Nasional 2024 yang memiliki makna mendalam."
    },
    {
      title: "Pasangan Muda Kepergok Mesra di Pantai Bebatuan Kenjeran, Satpol PP Surabaya Beri Pembinaan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413768862/pasangan-mudakepergok-mesra-di-pantai-bebatuan-kenjeran-satpol-pp-surabaya-beri-pembinaan",
      description: "Satuan Polisi Pamong Praja Kota Surabaya memberikan pembinaan kepada pasangan muda yang kedapatan berduaan di pantai bebatuan Kenjeran."
    },
    {
      title: "Didit dampingi Prabowo di Pelantikan Presiden, Duduk di Samping Selvi Ananda",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413774340/didit-dampingi-prabowo-di-pelantikan-presiden-duduk-di-samping-selvi-ananda",
      description: "Didit Hediprasetyo duduk di samping Selvi Ananda selama pelantikan presiden, menunjukkan kedekatannya dengan keluarga besar Prabowo."
    },
    {
      title: "Luar Biasa! Prabowo Hafal Nama Puluhan Tamu Negara, Dipanggil Tanpa Teks",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413775338/luar-biasa-prabowo-hafal-nama-puluhan-tamu-negara-dipanggil-tanpa-teks",
      description: "Presiden Prabowo Subianto menunjukkan kemampuan luar biasanya dengan menghafal nama puluhan tamu negara tanpa menggunakan teks pidato."
    },
    {
      title: "Postingan Ganjar-Mahfud Usai Tak Hadiri Pelantikan Prabowo-Gibran Jadi Sorotan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413775943/postingan-ganjar-mahfud-usai-tak-hadiri-pelantikan-prabowo-gibran-jadi-sorotan",
      description: "Pernyataan atau postingan dari Ganjar Pranowo dan Mahfud MD setelah tidak menghadiri pelantikan Prabowo-Gibran menjadi sorotan publik."
    },
    {
      title: "Lalu Lintas Dihentikan Sejenak Demi Event Lari di Surabaya, Tuai Pro-Kontra Warganet",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413776833/lalu-lintas-dihentikan-sejenak-demi-event-lari-di-surabaya-tuai-pro-kontra-warganet",
      description: "Penutupan sementara jalur lalu lintas di Surabaya untuk acara lari menimbulkan reaksi beragam dari warganet di media sosial."
    },
    {
      title: "Kewajiban Sertifikasi Halal Berlaku Mulai 18 Oktober, Ada Tiga Kelompok Produk yang Wajib Didaftarkan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/ekonomi/0413771133/kewajiban-sertifikasi-halal-berlaku-mulai-18-oktober-ada-tiga-kelompok-produk-yang-wajib-didaftarkan",
      description: "Mulai 18 Oktober 2024, kewajiban sertifikasi halal akan berlaku dengan tiga kelompok produk yang harus didaftarkan terlebih dahulu."
    },
    {
      title: "Postingan Titiek Soeharto Usai Prabowo Dilantik Tuai Komentar Warganet: Ibu Negara Kita",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413781169/postingan-titiek-soeharto-usai-prabowo-dilantik-tuai-komentar-warganet-ibu-negara-kita",
      description: "Putri Presiden ke-2 RI Megawati Soekarnoputri, Titiek Soeharto memposting ucapan selamat atas pelantikan Presiden Prabowo Subianto."
    },
    {
      title: "Harga Stroller Bobby Kertanegara Kucing Kesayangan Prabowo Setara UMR Jakarta",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/gaya-hidup/0413782025/harga-stroller-bobby-kertanegara-kucing-kesayangan-prabowo-setara-umr-jakarta",
      description: "Stroller mewah milik Bobby Kertanegara, kucing kesayangan Presiden Prabowo Subianto, memiliki harga setara dengan UMR Jakarta."
    },
    {
      title: "Dua Menteri Pendidikan Kabinet Merah Putih Disambut Baik, Berikut Profil Lengkapnya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0413783622/dua-menteri-pendidikan-kabinet-merah-putih-disambut-baik-berikut-profil-lengkapnya",
      description: "Dua menteri bidang pendidikan dalam Kabinet Merah Putih Presiden Prabowo Subianto mendapat sambutan baik dari masyarakat."
    },
    {
      title: "Pendaftaran PPPK Kementerian Agama Dibuka, Berikut Rentang Gaji dan Formasi yang Dibutuhkan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413795093/pendaftaran-pppk-kementerian-agama-dibuka-berikut-rentang-gaji-dan-formasi-yang-dibutuhkan",
      description: "Kementerian Agama membuka pendaftaran Pegawai Pemerintah dengan Perjanjian Kerja (PPPK) dengan berbagai formasi yang dibutuhkan."
    },
    {
      title: "Bocah Asal Dolopo Madiun Bermata Biru Mirip Tokoh Anime Gojo Satoru",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413797628/bocah-asal-dolopo-madiun-bermata-biru-mirip-tokoh-anime-gojo-satoru",
      description: "Seorang bocah dari Dolopo, Madiun memiliki mata berwarna biru yang mirip dengan karakter anime populer Gojo Satoru."
    },
    {
      title: "Debat Perdana Cabup Madiun 2024, Kaji Mbing-Sandhika Prioritaskan Dana Desa 20 Persen",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413798934/debat-perdana-cabup-madiun-2024-kaji-mbing-sandhika-prioritaskan-dana-desa-20-persen",
      description: "Debat perdana pasangan calon Bupati dan Wakil Bupati Madiun 2024 membahas berbagai isu penting termasuk alokasi dana desa."
    },
    {
      title: "Debat Perdana Pilkada Madiun 2024, Paslon Hari-Purnomo Prioritaskan Perlindungan Perempuan dan Disabilitas",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413799477/debat-perdana-pilkada-madiun-2024-paslon-hari-purnomo-prioritaskan-perlindungan-perempuan-dan-disabilitas",
      description: "Dalam debat perdana Pilkada Madiun 2024, pasangan Hari-Purnomo menekankan pentingnya perlindungan terhadap perempuan dan disabilitas."
    },
    {
      title: "Siap-siap Wajib Belajar 13 Tahun, Mendikdasmen: Pendidikan Pra Sekolah Sangat Penting",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0413805760/siap-siap-wajib-belajar-13-tahun-mendikdasmen-pendidikan-pra-sekolah-sangat-penting",
      description: "Menteri Pendidikan Dasar dan Menengah menegaskan pentingnya pendidikan pra sekolah dalam program wajib belajar 13 tahun."
    },
    {
      title: "Tiba di Akmil Magelang, Menteri Kabinet Merah Putih Disambut Parade Drumband",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/jawa-tengah/0413805933/tiba-di-akmil-magelang-menteri-kabinet-merah-putih-disambut-parade-drumband",
      description: "Para menteri dalam Kabinet Merah Putih Presiden Prabowo Subianto disambut dengan parade drumband saat tiba di Akmil Magelang."
    },
    {
      title: "Prabowo Minta Pejabat Jangan Mempersulit Keperluan Rakyat, Tidak Patuh Copot Segera",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413806896/prabowo-minta-pejabat-jangan-mempersulit-keperluan-rakyat-tidak-patuh-copot-segera",
      description: "Presiden Prabowo Subianto meminta para pejabat pemerintah untuk tidak mempersulit keperluan rakyat dan akan mencopot yang tidak patuh."
    },
    {
      title: "DPR RI Tetapkan Susunan 13 Komisi, Pimpinan Komisi VIII Jadi Sorotan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413816719/dpr-ri-tetapkan-susunan-13-komisi-pimpinan-komisi-viii-jadi-sorotan",
      description: "DPR RI telah menetapkan susunan 13 komisi baru dengan Komisi VIII yang menangani agama menjadi sorotan publik."
    },
    {
      title: "Satpol PP Surabaya Amankan Belasan Pemuda Pesta Miras, Ada yang Masih 13 Tahun",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413812346/satpol-pp-surabaya-amankan-belasan-pemuda-pesta-miras-ada-yang-masih-13-tahun",
      description: "Satuan Polisi Pamong Praja Kota Surabaya mengamankan belasan pemuda yang sedang berpesta minuman keras, termasuk yang masih di bawah umur."
    },
    {
      title: "Abdul Muti Belajar Bahasa Isyarat, Upaya Kemendikdasmen Perluas Akses Pendidikan untuk Difabel",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0413817119/abdul-muti-belajar-bahasa-isyarat-upaya-kemendikdasmen-perluas-akses-pendidikan-untuk-difabel",
      description: "Menteri Pendidikan Dasar dan Menengah Abdul Muti mempelajari bahasa isyarat sebagai upaya untuk memperluas akses pendidikan bagi difabel."
    },
    {
      title: "Lagi, Satpol PP Surabaya Amankan Muda-Mudi Pesta Miras di Taman Keputran",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413822007/lagi-satpol-pp-surabaya-amankan-muda-mudi-pesta-miras-di-taman-keputran",
      description: "Satpol PP Surabaya kembali mengamankan sejumlah pemuda dan pemudi yang sedang berpesta miras di Taman Keputran."
    },
    {
      title: "Aksi Dramatis Penangkapan Pelaku Curanmor di Surabaya Diwarnai Tembakan, Sudah Beraksi di 14 TKP",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413826968/aksi-dramatis-penangkapan-pelaku-curanmor-di-surabaya-diwarnai-tembakan-sudah-beraksi-di-14-tkp",
      description: "Penangkapan pelaku pencurian kendaraan bermotor di Surabaya berlangsung dramatis dengan adanya tembakan dari pelaku yang sudah beraksi di 14 TKP."
    },
    {
      title: "Pecah Rekor MURI, Ratusan Mahasiswa Unesa Surabaya Lakukan Terapi Butterfly Hug",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0413827699/pecah-rekor-muri-ratusan-mahasiswa-unesa-surabaya-lakukan-terapi-butterfly-hug",
      description: "Ratusan mahasiswa Universitas Negeri Surabaya memecahkan rekor MURI dengan melakukan terapi butterfly hug secara bersamaan."
    },
    {
      title: "BEM FISIP Unair Dibekukan Usai Pasang Karangan Bunga Satire untuk Prabowo-Gibran",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413821606/bem-fisip-unair-dibekukan-usai-pasang-karangan-bunga-satire-untuk-prabowo-gibran",
      description: "Badan Eksekutif Mahasiswa Fakultas Ilmu Sosial dan Ilmu Politik Universitas Airlangga dibekukan setelah memasang karangan bunga satire."
    },
    {
      title: "Berikut Kronologi Pemasangan Karangan Bunga oleh BEM FISIP Unair Berujung Dibekukan Dekanat",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413821686/berikut-kronologi-pemasangan-karangan-bunga-oleh-bem-fisip-unair-berujung-dibekukan-dekanat",
      description: "Berikut kronologi lengkap terkait pemasangan karangan bunga satire oleh BEM FISIP Unair yang berujung pada pembekuan oleh dekanat."
    },
    {
      title: "BEM FISIP Unair Dibekukan Imbas Karangan Bunga Satire Tuai Pro-Kontra dari Berbagai Kalangan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0413822298/bem-fisip-unair-dibekukan-imbas-karangan-bunga-satire-tuai-pro-kontra-dari-berbagai-kalangan",
      description: "Pembekuan BEM FISIP Unair atas pemasangan karangan bunga satire menuai pro-kontra dari berbagai kalangan masyarakat."
    },
    {
      title: "Pembekuan BEM FISIP Unair Dicabut, Begini Keterangan dari Dekanat",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413828545/pembekuan-bem-fisip-unair-dicabut-begini-keterangan-dari-dekanat",
      description: "Dekanat FISIP Universitas Airlangga mencabut pembekuan terhadap BEM setelah melakukan evaluasi terhadap kejadian sebelumnya."
    },
    {
      title: "Mendikdasmen Serius Soal Program Wajib Belajar 13 Tahun, Termasuk Daycare dan Kelompok Bermain",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0413831723/mendikdasmen-serius-soal-program-wajib-belajar-13-tahun-termasuk-daycare-dan-kelompok-bermain",
      description: "Menteri Pendidikan Dasar dan Menengah menegaskan keseriusan dalam menjalankan program wajib belajar 13 tahun hingga tingkat daycare."
    },
    {
      title: "Janji Prabowo Naikkan Gaji Guru Honorer 2 Juta, Abdul Muti: Nominalnya Tidak Sama",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0413832543/janji-prabowo-naikkan-gaji-guru-honorer-2-juta-abdul-muti-nominalnya-tidak-sama",
      description: "Presiden Prabowo berjanji akan menaikkan gaji guru honorer, namun Menteri Pendidikan Dasar dan Menengah Abdul Muti menyatakan nominalnya tidak sama."
    },
    {
      title: "Suasana Sel Tahanan Ronald Tannur, Karutan: Tidak Ada Perlakuan Khusus",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413834418/suasana-sel-tahanan-ronald-tannur-karutan-tidak-ada-perlakuan-khusus",
      description: "Keluarga Ronald Tannur mengungkapkan suasana sel tahanan tempat ia ditahan dan menyatakan tidak ada perlakuan khusus."
    },
    {
      title: "Bus Transjatim Rute Surabaya-Bangkalan Dipepet Bus Akas di Suramadu, Penumpang Histeris",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413840779/bus-transjatim-rute-surabaya-bangkalan-dipepet-bus-akas-di-suramadu-penumpang-histeris",
      description: "Bus Transjatim rute Surabaya-Bangkalan mengalami kemacetan parah di jembatan Suramadu akibat dipepet bus AKAS, membuat penumpang panik."
    },
    {
      title: "Nasib Karyawan Sritex hingga UMP 2025, Menaker Yassierli Angkat Bicara",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/ekonomi/0413841684/nasib-karyawan-sritex-hingga-ump-2025-menaker-yassierli-angkat-bicara",
      description: "Menteri Ketenagakerjaan Yassierli angkat bicara terkait nasib karyawan PT Sritex dan penerapan Upah Minimum Provinsi (UMP) 2025."
    },
    {
      title: "Terungkap Motif Pembunuhan Lansia Pemilik Kos di Ngawi, Bermula dari Tagihan Kos",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413844609/terungkap-motif-pembunuhan-lansia-pemilik-kos-di-ngawi-bermula-dari-tagihan-kos",
      description: "Motif pembunuhan terhadap seorang lansia pemilik kos di Ngawi terungkap bermula dari masalah tagihan kos yang tidak kunjung dibayar."
    },
    {
      title: "Polrestabes Surabaya Bongkar Jaringan Narkoba Besar-besaran, 16 Kg Sabu dan 148 Ribu Pil Koplo Diamankan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413843268/polrestabes-surabaya-bongkar-jaringan-narkoba-besar-besaran-16-kg-sabu-dan-148-ribu-pil-koplo-diamankan",
      description: "Polrestabes Surabaya berhasil membongkar jaringan narkoba besar-besaran dengan menyita 16 kg sabu dan 148 ribu pil koplo."
    },
    {
      title: "BMKG Peringatkan Cuaca Ekstrem di Jawa Timur hingga 6 November, Ini Daerah yang Terdampak",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413846178/bmkg-peringatkan-cuaca-ekstrem-di-jawa-timur-hingga-6-november-ini-daerah-yang-terdampak",
      description: "Badan Meteorologi, Klimatologi, dan Geofisika memperingatkan akan terjadinya cuaca ekstrem di Jawa Timur hingga 6 November mendatang."
    },
    {
      title: "Kasus Guru Honorer Supriyani Jadi Sorotan, Mendikdasmen: Janji Akan Bicara dengan Kapolri",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413856856/kasus-guru-honorer-supriyani-jadi-sorotan-mendikdasmen-janji-akan-bicara-dengan-kapolri",
      description: "Kasus penembakan terhadap guru honorer Supriyani menjadi sorotan, Menteri Pendidikan Dasar dan Menengah berjanji akan membicarakannya dengan Kapolri."
    },
    {
      title: "Mendikdasmen Jalin Kerja Sama dengan PBNU, Perkuat Pendidikan Berbasis Komunitas",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413857119/mendikdasmen-jalin-kerja-sama-dengan-pbnu-perkuat-pendidikan-berbasis-komunitas",
      description: "Menteri Pendidikan Dasar dan Menengah menjalin kerja sama dengan PBNU untuk memperkuat sistem pendidikan berbasis komunitas."
    },
    {
      title: "Polisi Gadungan di Surabaya Tipu Seorang Perempuan via Medsos, Bawa Kabur Perhiasan Emas",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413856360/polisi-gadungan-di-surabaya-tipu-seorang-perempuan-via-medsos-bawa-kabur-perhiasan-emas",
      description: "Seorang pria berpura-pura sebagai polisi menipu seorang perempuan di Surabaya melalui media sosial dan membawa kabur perhiasan emasnya."
    },
    {
      title: "Natalius Pigai Usulkan Anggaran Rp20 Triliun untuk Kementerian HAM, Berikut Rincian dan Program Prioritasnya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413858288/natalius-pigai-usulkan-anggaran-rp20-triliun-untuk-kementerian-ham-berikut-rincian-dan-program-prioritasnya",
      description: "Menteri Hukum dan Hak Asasi Manusia Natalius Pigai mengusulkan anggaran sebesar Rp20 triliun dengan berbagai program prioritas."
    },
    {
      title: "Yasonna Laoly Tanggapi Natalius Pigai Soal Anggaran Rp20 T: Harus Realistis",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413859707/yasonna-laoly-tanggapi-natalius-pigai-soal-anggaran-rp20-t-harus-realistis",
      description: "Menteri Koordinator Bidang Politik, Hukum, dan Keamanan Yasonna Laoly menanggapi usulan anggaran Rp20 triliun dari Natalius Pigai dengan menekankan realistis."
    },
    {
      title: "Viral Pencurian Berlian 15 Gram di PTC Mall Surabaya, Pelaku Pura-pura Beli",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413859850/viral-pencurian-berlian-15-gram-di-ptc-mall-surabaya-pelaku-pura-pura-beli",
      description: "Video viral pencurian berlian seberat 15 gram di PTC Mall Surabaya, pelaku berpura-pura menjadi pembeli sebelum melakukan pencurian."
    },
    {
      title: "Pegawai Komdigi Terlibat Judi Online, Meutya Hafid: 187 Ribu Situs Sudah Kita Blokir",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413864498/pegawai-komdigi-terlibat-judi-online-meutya-hafid-187-ribu-situs-sudah-kita-blokir",
      description: "Ketua Kominfo Meutya Hafid mengungkapkan bahwa pegawai Komdigi terlibat dalam judi online, sementara pihaknya telah memblokir 187 ribu situs."
    },
    {
      title: "Kantor Satelit Judi Online Digeledah, Pegawai Komdigi Diduga Salahgunakan Wewenang",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413866304/kantor-satelit-judi-online-digeledah-pegawai-komdigi-diduga-salahgunakan-wewenang",
      description: "Kantor satelit judi online digeledah aparat terkait, diduga melibatkan pegawai Komdigi yang disalahgunakan wewenangnya."
    },
    {
      title: "KA Relasi Solo-Madiun Resmi Beroperasi 2 November, Berikut Tarif dan Stasiun yang Dilalui",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413864192/ka-relasi-solo-madiun-resmi-beroperasi-2-november-berikut-tarif-dan-stasiun-yang-dilalui",
      description: "Kereta Api relasi Solo-Madiun resmi beroperasi pada 2 November dengan tarif yang telah ditetapkan dan melewati sejumlah stasiun."
    },
    {
      title: "Ribuan Konten Judi Online Kembali Diblokir Komdigi, Tidak Mungkin Membuat Anda Kaya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413905724/ribuan-konten-judi-online-kembali-diblokir-komdigi-tidak-mungkin-membuat-anda-kaya",
      description: "Komdigi kembali memblokir ribuan konten judi online dengan pesan bahwa judi tidak mungkin membuat seseorang menjadi kaya."
    },
    {
      title: "Cek Fakta Pernyataan Cabup-Cawabup Madiun dalam Debat Kedua",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/jawa-tengah/0413894947/cek-fakta-pernyataan-cabup-cawabup-madiun-dalam-debat-kedua",
      description: "Tim cek fakta melakukan verifikasi terhadap pernyataan para pasangan calon Bupati dan Wakil Bupati Madiun selama debat kedua."
    },
    {
      title: "Debat Kedua Pilgub Jatim 2024, Ini Sederet Janji Ketiga Paslon Gubernur-Wakil Gubernur",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413879857/debat-kedua-pilgub-jatim-2024-ini-sederet-janji-ketiga-paslon-gubernur-wakil-gubernur",
      description: "Debat kedua Pemilihan Gubernur Jawa Timur 2024 memperlihatkan sederet janji dari ketiga pasangan calon gubernur dan wakil gubernur."
    },
    {
      title: "Debat Kedua Pilgub Jatim Memanas, Luluk dan Khofifah Saling Serang: Apalah Artinya Penghargaan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413877767/debat-kedua-pilgub-jatim-memanas-luluk-dan-khofifah-saling-serang-apalah-artinya-penghargaan",
      description: "Debat kedua Pilgub Jatim berlangsung memanas saat Luluk dan Khofifah saling menyerang dengan menyindir penghargaan yang pernah diterima."
    },
    {
      title: "Tak Hanya Luluk dan Khofifah, Cawagub Juga Saling Serang dalam Debat Kedua Pilgub Jatim",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413878441/tak-hanya-luluk-dan-khofifah-cawagub-juga-saling-serang-dalam-debat-kedua-pilgub-jatim",
      description: "Selain para calon gubernur, para calon wakil gubernur juga saling menyerang dalam debat kedua Pemilihan Gubernur Jawa Timur."
    },
    {
      title: "Ditanya Soal Tingginya Pengangguran Lulusan SMK, Ini Jawaban Tiga Srikandi Cagub Jawa Timur",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413879475/ditanya-soal-tingginya-pengangguran-lulusan-smk-ini-jawaban-tiga-srikandi-cagub-jawa-timur",
      description: "Ketika ditanya soal tingginya pengangguran lulusan SMK, ketiga calon gubernur perempuan Jawa Timur memberikan jawaban yang berbeda."
    },
    {
      title: "Ibunda Ronald Tannur Ditetapkan Jadi Tersangka oleh Kejagung, Begini Alur Suap Kasusnya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413881169/ibunda-ronald-tannur-ditetapkan-jadi-tersangka-oleh-kejagung-begini-alur-suap-kasusnya",
      description: "Kejaksaan Agung menetapkan ibunda Ronald Tannur sebagai tersangka dalam kasus suap, berikut alur lengkap kasusnya."
    },
    {
      title: "Dukung Program Ketahanan Pangan Prabowo Subianto, Polres Madiun Tanam Benih Jagung dan Ternak Kambing",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413884508/dukung-program-ketahanan-pangan-prabowo-subianto-polres-madiun-tanam-benih-jagung-dan-ternak-kambing",
      description: "Polres Madiun mendukung program ketahanan pangan Presiden Prabowo Subianto dengan menanam benih jagung dan memelihara ternak kambing."
    },
    {
      title: "Kawasan Wisata Gunung Bromo Lakukan Penyesuaian Tarif, Segini Tiket Masuknya Sekarang",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/gaya-hidup/0413887338/kawasan-wisata-gunung-bromo-lakukan-penyesuaian-tarif-segini-tiket-masuknya-sekarang",
      description: "Kawasan wisata Gunung Bromo melakukan penyesuaian tarif tiket masuk yang baru, berikut informasi lengkapnya."
    },
    {
      title: "Debat Kedua Pilbup Madiun, Janji Kaji Mbing-Sandhika yang Miskin Dibantu?page=2",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413893915/debat-kedua-pilbup-madiun-janji-kaji-mbing-sandhika-yang-miskin-dibantu?page=2",
      description: "Dalam debat kedua Pilbup Madiun, pasangan Kaji Mbing-Sandhika berjanji akan membantu masyarakat miskin jika terpilih."
    },
    {
      title: "Debat Kedua Pilbup Madiun, Hari-Purnomo Janjikan Sanggar Seni untuk Perguruan Silat?page=2",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413894564/debat-kedua-pilbup-madiun-hari-purnomo-janjikan-sanggar-seni-untuk-perguruan-silat?page=2",
      description: "Pasangan Hari-Purnomo dalam debat kedua Pilbup Madiun berjanji akan membangun sanggar seni untuk perguruan silat jika terpilih."
    },
    {
      title: "Ditanya Soal Pengadaan Pupuk untuk Petani, Ini Jawaban Dua Cabup Madiun dalam Debat Kedua",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413894824/ditanya-soal-pengadaan-pupuk-untuk-petani-ini-jawaban-dua-cabup-madiun-dalam-debat-kedua",
      description: "Ketika ditanya soal pengadaan pupuk untuk petani, dua calon bupati Madiun memberikan jawaban berbeda dalam debat kedua."
    },
    {
      title: "Dramatis Aksi Polisi di Kenjeran Surabaya, Kejar Pelaku Curanmor yang Hendak Melarikan Diri",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413900897/dramatis-aksi-polisi-di-kenjeran-surabaya-kejar-pelaku-curanmor-yang-hendak-melarikan-diri",
      description: "Aksi dramatis terjadi di Kenjeran Surabaya saat polisi mengejar pelaku pencurian kendaraan bermotor yang hendak melarikan diri."
    },
    {
      title: "Jelang Kunjungan Luar Negeri Prabowo, Instruksikan Menteri Fokus Berantas Judol dan Efisiensi Anggaran",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413901260/jelang-kunjungan-luar-negeri-prabowo-instruksikan-menteri-fokus-berantas-judol-dan-efisiensi-anggaran",
      description: "Menjelang kunjungan luar negeri, Presiden Prabowo menginstruksikan para menteri untuk fokus memberantas judi online dan efisiensi anggaran."
    },
    {
      title: "Bocoran Kurikulum Merdeka akan Diganti Jadi Kurikulum Deep Learning, Ini Kata Mendikdasmen Abdul Muti",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413901732/bocoran-kurikulum-merdeka-akan-diganti-jadi-kurikulum-deep-learning-ini-kata-mendikdasmen-abdul-muti",
      description: "Bocoran menyebut bahwa Kurikulum Merdeka akan diganti dengan Kurikulum Deep Learning, Menteri Pendidikan Dasar dan Menengah Abdul Muti angkat bicara."
    },
    {
      title: "Mendikdasmen Abdul Muti Gagas Pembelajaran Deep Learning, Ini Penjelasan Metodenya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0413907996/mendikdasmen-abdul-muti-gagas-pembelajaran-deep-learning-ini-penjelasan-metodenya",
      description: "Menteri Pendidikan Dasar dan Menengah Abdul Muti menggagas pembelajaran berbasis deep learning dengan metode yang inovatif."
    },
    {
      title: "Penghapusan Utang UMKM Sudah Menyasar 600 Ribu Keluarga, Bebas dari Blacklist BI Checking",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/ekonomi/0413908082/penghapusan-utang-umkm-sudah-menyasar-600-ribu-keluarga-bebas-dari-blacklist-bi-checking",
      description: "Program penghapusan utang UMKM telah menyasar 600 ribu keluarga, sehingga mereka bebas dari blacklist BI Checking."
    },
    {
      title: "Wapres Gibran Minta Kepala Daerah Juga Turut Ospek di Akmil Magelang, Biar Semuanya Sinergi",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413909095/wapres-gibran-minta-kepala-daerah-juga-turut-ospek-di-akmil-magelang-biar-semuanya-sinergi",
      description: "Wakil Presiden Gibran meminta kepala daerah untuk turut mengikuti ospek di Akmil Magelang demi menciptakan sinergi pemerintahan."
    },
    {
      title: "Diduga Efek Boikot KFC, Tutup 47 Gerai dan PHK 2000 Karyawan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/ekonomi/0413911842/diduga-efek-boikot-kfc-tutup-47-gerai-dan-phk-2000-karyawan",
      description: "Diduga akibat efek boikot, KFC terpaksa menutup 47 gerai dan melakukan pemutusan hubungan kerja terhadap 2000 karyawan."
    },
    {
      title: "Berantas Peredaran Rokok Ilegal, Satpol PP Surabaya dan Bea Cukai Sidoarjo Operasi Toko Kelontong",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413912035/berantas-peredaran-rokok-ilegal-satpol-pp-surabaya-dan-bea-cukai-sidoarjo-operasi-toko-kelontong",
      description: "Satpol PP Surabaya dan Bea Cukai Sidoarjo melakukan operasi gabungan untuk memberantas peredaran rokok ilegal di toko kelontong."
    },
    {
      title: "Gibran Usulkan Bangun Sekolah Khusus bagi Korban Rudapaksa, Jangan Malah Dikeluarkan dari Sekolah",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413925466/gibran-usulkan-bangun-sekolah-khusus-bagi-korban-rudapaksa-jangan-malah-dikeluarkan-dari-sekolah",
      description: "Wakil Presiden Gibran mengusulkan pembangunan sekolah khusus bagi korban rudapaksa agar tidak dikeluarkan dari sekolah reguler."
    },
    {
      title: "5 Destinasi Wisata Sejarah di Surabaya untuk Mengenang Hari Pahlawan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/gaya-hidup/0413925466/5-destinasi-wisata-sejarah-di-surabaya-untuk-mengenang-hari-pahlawan",
      description: "Surabaya memiliki banyak destinasi wisata bersejarah yang bisa dikunjungi untuk memperingati Hari Pahlawan."
    }
    ,
    {
      title: "Dari Balik Penjara, Tom Lembong Tulis Surat Singgung Soal Profesionalisme Hakim dan Jaksa",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413917941/dari-balik-penjara-tom-lembong-tulis-surat-singgung-soal-profesionalisme-hakim-dan-jaksa",
      description: "Dari Balik Penjara, Tom Lembong Tulis Surat Singgung Soal Profesionalisme Hakim dan Jaksa"
    },
    {
      title: "Bebas dari Tahanan, Gunawan Sadbor Kini Diangkat Jadi Duta Anti Judi Online",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413926157/bebas-dari-tahanan-gunawan-sadbor-kini-diangkat-jadi-duta-anti-judi-online",
      description: "Bebas dari Tahanan, Gunawan Sadbor Kini Diangkat Jadi Duta Anti Judi Online"
    },
    {
      title: "Gibran Buka Layanan Pengaduan Masyarakat, Bisa Kontak WhatsApp atau Langsung ke Istana Wapres",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413923434/gibran-buka-layanan-pengaduan-masyarakat-bisa-kontak-whatsapp-atau-langsung-ke-istana-wapres",
      description: "Gibran Buka Layanan Pengaduan Masyarakat, Bisa Kontak WhatsApp atau Langsung ke Istana Wapres"
    },
    {
      title: "Gibran Minta Ada Undang-undang Perlindungan Guru, Jangan Ada Lagi Kasus Kriminalisasi Guru",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413924419/gibran-minta-ada-undang-undang-perlindungan-guru-jangan-ada-lagi-kasus-kriminalisasi-guru",
      description: "Gibran Minta Ada Undang-undang Perlindungan Guru, Jangan Ada Lagi Kasus Kriminalisasi Guru"
    },
    {
      title: "Usai Prabowo Minta Matematika Dikenalkan Sejak TK, Gibran Usul Pelajaran Coding untuk SD dan SMP",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413924803/usai-prabowo-minta-matematika-dikenalkan-sejak-tk-gibran-usul-pelajaran-coding-untuk-sd-dan-smp",
      description: "Usai Prabowo Minta Matematika Dikenalkan Sejak TK, Gibran Usul Pelajaran Coding untuk SD dan SMP"
    },
    {
      title: "Komdigi Blokir Ribuan Situs dan Akun Medsos Terkait Judol, Termasuk Tiga Akun Populer",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413934035/komdigi-blokir-ribuan-situs-dan-akun-medsos-terkait-judol-termasuk-tiga-akun-populer",
      description: "Komdigi Blokir Ribuan Situs dan Akun Medsos Terkait Judol, Termasuk Tiga Akun Populer"
    },
    {
      title: "Lempar Bom ke Polisi Saat Hendak Ditangkap, Pelaku Curanmor Ditembak Mati",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413941140/lempar-bom-ke-polisi-saat-hendak-ditangkap-pelaku-curanmor-ditembak-mati",
      description: "Lempar Bom ke Polisi Saat Hendak Ditangkap, Pelaku Curanmor Ditembak Mati"
    },
    {
      title: "iPhone 16 Dilarang Dijual di Indonesia, Respon David Gadgetin: Nggak Perlu Takut",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/teknologi/0413941485/iphone-16-dilarang-dijual-di-indonesia-respon-david-gadgetin-nggak-perlu-takut",
      description: "iPhone 16 Dilarang Dijual di Indonesia, Respon David Gadgetin: Nggak Perlu Takut"
    },
    {
      title: "Serikat Buruh Madiun Raya Akan Gelar Demo di Pendopo Caruban, Tuntut Tunggakan Gaji Empat Bulan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413937812/serikat-buruh-madiun-raya-akan-gelar-demo-di-pendopo-caruban-tuntut-tunggakan-gaji-empat-bulan",
      description: "Serikat Buruh Madiun Raya Akan Gelar Demo di Pendopo Caruban, Tuntut Tunggakan Gaji Empat Bulan"
    },
    {
      title: "Wilayah Pesisir Surabaya Waspada Pasang Air Laut Capai Ketinggian Maksimum Mulai 14 November",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413938447/wilayah-pesisir-surabaya-waspada-pasang-air-laut-capai-ketinggian-maksimum-mulai-14-november",
      description: "Wilayah Pesisir Surabaya Waspada Pasang Air Laut Capai Ketinggian Maksimum Mulai 14 November"
    },
    {
      title: "Kabar Gembira Bagi Petani, Pemerintah Tambah Kuota Pupuk Subsidi Dua Kali Lipat dan Percepat Penyaluran",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/ekonomi/0413940178/kabar-gembira-bagi-petani-pemerintah-tambah-kuota-pupuk-subsidi-dua-kali-lipat-dan-percepat-penyaluran",
      description: "Kabar Gembira Bagi Petani, Pemerintah Tambah Kuota Pupuk Subsidi Dua Kali Lipat dan Percepat Penyaluran"
    },
    {
      title: "Mendikdasmen Rapat dengan Kapolri, Bahas Penyelesaian Kekerasan dan Judol di Kalangan Pelajar",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413948619/mendikdasmen-rapat-dengan-kapolri-bahas-penyelesaian-kekerasan-dan-judol-di-kalangan-pelajar",
      description: "Mendikdasmen Rapat dengan Kapolri, Bahas Penyelesaian Kekerasan dan Judol di Kalangan Pelajar"
    },
    {
      title: "Pelaku Perundungan Siswa SMAK Gloria 2 Surabaya Dijemput Paksa Kepolisian",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413949541/pelaku-perundungan-siswa-smak-gloria-2-surabaya-dijemput-paksa-kepolisian",
      description: "Pelaku Perundungan Siswa SMAK Gloria 2 Surabaya Dijemput Paksa Kepolisian"
    },
    {
      title: "Oknum Dokter Bersikap Tak Sopan di Chat Instagram, Halodoc Diserbu Penggemar Nadin Amizah",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/hiburan/0413949026/oknum-dokter-bersikap-tak-sopan-di-chat-instagram-halodoc-diserbu-penggemar-nadin-amizah",
      description: "Oknum Dokter Bersikap Tak Sopan di Chat Instagram, Halodoc Diserbu Penggemar Nadin Amizah"
    },
    {
      title: "Pelaku Perundungan yang Paksa Siswa Menggonggong di Surabaya Resmi Jadi Tersangka",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413954665/pelaku-perundungan-yang-paksa-siswa-menggonggong-di-surabaya-resmi-jadi-tersangka",
      description: "Pelaku Perundungan yang Paksa Siswa Menggonggong di Surabaya Resmi Jadi Tersangka"
    },
    {
      title: "Penjelasan Gaji 10 Juta bagi Petani Milenial, Amran Sulaiman: Tergantung Dia Rajin Apa Malas",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/ekonomi/0413954851/penjelasan-gaji-10-juta-bagi-petani-milenial-amran-sulaiman-tergantung-dia-rajin-apa-malas",
      description: "Penjelasan Gaji 10 Juta bagi Petani Milenial, Amran Sulaiman: Tergantung Dia Rajin Apa Malas"
    },
    {
      title: "6 Program Prioritas Kemendikdasmen: Wajib Belajar 13 Tahun hingga Peningkatan Kesejahteraan Guru",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0413955854/6-program-prioritas-kemendikdasmen-wajib-belajar-13-tahun-hingga-peningkatan-kesejahteraan-guru",
      description: "6 Program Prioritas Kemendikdasmen: Wajib Belajar 13 Tahun hingga Peningkatan Kesejahteraan Guru"
    },
    {
      title: "14 Napi Beresiko Tinggi di Lapas Kelas I Madiun Dipindah ke Nusakambangan Akibat Perbuatan Onar",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413958989/14-napi-beresiko-tinggi-di-lapas-kelas-i-madiun-dipindah-ke-nusakambangan-akibat-perbuatan-onar",
      description: "14 Napi Beresiko Tinggi di Lapas Kelas I Madiun Dipindah ke Nusakambangan Akibat Perbuatan Onar"
    },
    {
      title: "PPN 12 Persen Mulai Berlaku 1 Januari 2025, Ini Barang dan Jasa yang Dikenai serta Bebas PPN",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/ekonomi/0413959559/ppn-12-persen-mulai-berlaku-1-januari-2025-ini-barang-dan-jasa-yang-dikenai-serta-bebas-ppn",
      description: "PPN 12 Persen Mulai Berlaku 1 Januari 2025, Ini Barang dan Jasa yang Dikenai serta Bebas PPN"
    },
    {
      title: "Ibunda Korban Perundungan SMAK Gloria Surabaya Tak Kuasa Menahan Sesak, Hotman Paris Pasang Badan Siap Bantu Ibu",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413960296/ibunda-korban-perundungan-smak-gloria-surabaya-tak-kuasa-menahan-sesak-hotman-paris-pasang-badan-siap-bantu-ibu",
      description: "Ibunda Korban Perundungan SMAK Gloria Surabaya Tak Kuasa Menahan Sesak, Hotman Paris Pasang Badan Siap Bantu Ibu"
    },
    {
      title: "Khofifah Dicecar Dua Lawannya Perihal Pengelolaan Sampah di Jawa Timur, Luluk: Pemprov Jatim Gagal",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413978330/khofifah-dicecar-dua-lawannya-perihal-pengelolaan-sampah-di-jawa-timur-luluk-pemprov-jatim-gagal",
      description: "Khofifah Dicecar Dua Lawannya Perihal Pengelolaan Sampah di Jawa Timur, Luluk: Pemprov Jatim Gagal"
    },
    {
      title: "Pendaftaran Brigade Pangan Petani Milenial Dibuka, Begini Cara Daftarnya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413993489/pendaftaran-brigade-pangan-petani-milenial-dibuka-begini-cara-daftarnya",
      description: "Pendaftaran Brigade Pangan Petani Milenial Dibuka, Begini Cara Daftarnya"
    },
    {
      title: "Jawaban Mendikdasmen tentang Ujian Nasional dan Kesejahteraan Guru: Masih Sebatas Omon-omon",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0413989786/jawaban-mendikdasmen-tentang-ujian-nasional-dan-kesejahteraan-guru-masih-sebatas-omon-omon",
      description: "Jawaban Mendikdasmen tentang Ujian Nasional dan Kesejahteraan Guru: Masih Sebatas Omon-omon"
    },
    {
      title: "Antusiasme Program Lapor Mas Wapres Membludak, Sekretariat Wakil Presiden Tetapkan Aturan Ini",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413971961/antusiasme-program-lapor-mas-wapres-membludak-sekretariat-wakil-presiden-tetapkan-aturan-ini?page=3",
      description: "Antusiasme Program Lapor Mas Wapres Membludak, Sekretariat Wakil Presiden Tetapkan Aturan Ini"
    }
    ,
    {
      title: "Kenaikan PPN 12 Persen, Warganet Ramai-ramai Ajak Kurangi Belanja dan Boikot Pemerintah",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/ekonomi/0413974749/kenaikan-ppn-12-persen-warganet-ramai-ramai-ajak-masyarakat-kurangi-belanja-boikot-pemerintah",
      description: "Kenaikan PPN 12 Persen, Warganet Ramai-ramai Ajak Kurangi Belanja dan Boikot Pemerintah"
    },
    {
      title: "Aksi Carok di Sampang Madura Gara-gara Pilkada, Tewaskan Pendukung Salah Satu Paslon",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413974612/aksi-carok-di-sampang-madura-gara-gara-pilkada-tewaskan-pendukung-salah-satu-paslon",
      description: "Aksi Carok di Sampang Madura Gara-gara Pilkada, Tewaskan Pendukung Salah Satu Paslon"
    },
    {
      title: "Janji Luluk-Lukman di Debat ke-3 Pilgub Jatim: KRL Madura hingga Lapangan Bola Internasional",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413979022/janji-luluk-lukman-di-debat-ke-3-pilgub-jatim-krl-madura-hingga-lapangan-bola-internasional",
      description: "Janji Luluk-Lukman di Debat ke-3 Pilgub Jatim: KRL Madura hingga Lapangan Bola Internasional"
    },
    {
      title: "Khofifah-Emil Janjikan Perluas Rute Bus Transjatim hingga Malang, Madiun, dan Jember",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413979378/khofifah-emil-janjikan-perluas-rute-bus-transjatim-hingga-malang-madiun-dan-jember",
      description: "Khofifah-Emil Janjikan Perluas Rute Bus Transjatim hingga Malang, Madiun, dan Jember"
    },
    {
      title: "Risma-Gus Hans Janjikan Jalan Tembus Tulungagung–Trenggalek dalam Debat Ketiga Pilgub Jatim",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413979918/risma-gus-hans-janjikan-jalan-tembus-tulungagung-trenggalek-dalam-debat-ketiga-pilgub-jatim",
      description: "Risma-Gus Hans Janjikan Jalan Tembus Tulungagung–Trenggalek dalam Debat Ketiga Pilgub Jatim"
    },
    {
      title: "Anak Ivan Sugianto Tulis Surat untuk Ayahnya: Papa Adalah Pahlawan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413987508/anak-ivan-sugianto-tulis-surat-untuk-ayahnya-papa-adalah-pahlawan",
      description: "Anak Ivan Sugianto Tulis Surat untuk Ayahnya: Papa Adalah Pahlawan"
    },
    {
      title: "Disinggung Sandhika soal Kebijakan Bidang Kesehatan, Purnomo: Saya Ini Direktur Rumah Sakit",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413989697/disinggung-sandhika-soal-kebijakan-bidang-kesehatan-purnomo-saya-ini-direktur-rumah-sakit",
      description: "Disinggung Sandhika soal Kebijakan Bidang Kesehatan, Purnomo: Saya Ini Direktur Rumah Sakit"
    },
    {
      title: "Debat Ketiga Pilbup Madiun, Ini Strategi Kedua Paslon Menekan Angka Pernikahan Dini",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413988929/debat-ketiga-pilbup-madiun-ini-strategi-kedua-paslon-menekan-angka-pernikahan-dini",
      description: "Debat Ketiga Pilbup Madiun, Ini Strategi Kedua Paslon Menekan Angka Pernikahan Dini"
    },
    {
      title: "Mendikdasmen Abdul Muti Imbau Para Guru Tetap Netral, Jangan Jadi Ajang Kampanye",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0413992870/mendikdasmen-abdul-muti-imbau-para-guru-tetap-netral-jangan-jadi-ajang-kampanye",
      description: "Mendikdasmen Abdul Muti Imbau Para Guru Tetap Netral, Jangan Jadi Ajang Kampanye"
    },
    {
      title: "Pelajaran Coding Akan Diterapkan Mulai Tahun Ajaran Baru untuk Jenjang SD dan SMP",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0413996519/pelajaran-coding-akan-diterapkan-mulai-tahun-ajaran-baru-untuk-jenjang-sd-dan-smp",
      description: "Pelajaran Coding Akan Diterapkan Mulai Tahun Ajaran Baru untuk Jenjang SD dan SMP"
    },
    {
      title: "Vicky Prasetyo Kalah di Pilkada Pemalang, Tanggapannya Bikin Iba: Ketulusan Dikalahkan oleh Uang",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/jawa-tengah/0414044037/vicky-prasetyo-kalah-di-pilkada-pemalang-tanggapannya-bikin-iba-ketulusan-dikalahkan-oleh-uang",
      description: "Vicky Prasetyo Kalah di Pilkada Pemalang, Tanggapannya Bikin Iba: Ketulusan Dikalahkan oleh Uang"
    },
    {
      title: "Gibran Minta Mendikdasmen Hapus Sistem PPDB Zonasi: Ini Harus Dihilangkan",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0414001351/gibran-minta-mendikdasmen-hapus-sistem-ppdb-zonasi-ini-harus-dihilangkan/",
      description: "Gibran Minta Mendikdasmen Hapus Sistem PPDB Zonasi: Ini Harus Dihilangkan"
    },
    {
      title: "Wujudkan Pekarangan Pangan Lestari, Kementan Akan Bagi-bagi Bibit Tanaman dan Ternak",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/ekonomi/0414002410/wujudkan-pekarangan-pangan-lestari-kementan-akan-bagi-bagi-bibit-tanaman-dan-ternak",
      description: "Wujudkan Pekarangan Pangan Lestari, Kementan Akan Bagi-bagi Bibit Tanaman dan Ternak"
    },
    {
      title: "Operasi Tumpas Narkoba Polda Jatim Razia Sejumlah Klub Malam di Surabaya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414002082/operasi-tumpas-narkoba-polda-jatim-razia-sejumlah-klub-malam-di-surabaya",
      description: "Operasi Tumpas Narkoba Polda Jatim Razia Sejumlah Klub Malam di Surabaya"
    },
    {
      title: "Cara Mudah Dapat Pinjaman KUR BRI hingga Rp500 Juta serta Program Keberangkatan TKI: Syarat dan Langkah Daftarnya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/ekonomi/0414044522/cara-mudah-dapat-pinjaman-kur-bri-hingga-rp500-juta-serta-program-keberangkatan-tki-simak-syarat-dan-langkah-daftarnya",
      description: "Cara Mudah Dapat Pinjaman KUR BRI hingga Rp500 Juta serta Program Keberangkatan TKI: Syarat dan Langkah Daftarnya"
    },
    {
      title: "Hasil Resmi Pilkada 2024 Diumumkan Kapan? Ini Jadwal dan Tahapan Pasca Pemungutan Suara",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414049403/hasil-resmi-pilkada-2024-diumumkan-kapan-ini-jadwal-dan-tahapan-pasca-pemungutan-suara",
      description: "Hasil Resmi Pilkada 2024 Diumumkan Kapan? Ini Jadwal dan Tahapan Pasca Pemungutan Suara"
    },
    {
      title: "Prabowo Curhat Diejek soal Program Makan Bergizi Gratis: Saya Ditertawakan, Dibilang Setengah Gila",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414049875/prabowo-curhat-diejek-soal-program-makan-bergizi-gratis-saya-ditertawakan-dibilang-setengah-gila",
      description: "Prabowo Curhat Diejek soal Program Makan Bergizi Gratis: Saya Ditertawakan, Dibilang Setengah Gila"
    },
    {
      title: "Makna Semboyan di Hari Guru: Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0414019461/makna-semboyan-di-hari-guru-ing-ngarsa-sung-tuladha-ing-madya-mangun-karsa-tut-wuri-handayani",
      description: "Makna Semboyan di Hari Guru: Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani"
    },
    {
      title: "27 November Nyoblos di TPS Mana? Link Cek DPT Online dan Tempat Pemungutan Suara Pilkada 2024",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414019798/27-november-nyoblos-di-tps-mana-berikut-link-cek-dpt-online-dan-tempat-pemungutan-suara-pilkada-2024",
      description: "27 November Nyoblos di TPS Mana? Link Cek DPT Online dan Tempat Pemungutan Suara Pilkada 2024"
    },
    {
      title: "Perhatikan Tata Cara Pencoblosan agar Suara Sah: Panduan Lengkap di TPS Pilkada 2024",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414021260/perhatikan-tata-cara-pencoblosan-agar-suara-sah-catat-panduan-lengkap-mencoblos-di-tps-pilkada-2024",
      description: "Perhatikan Tata Cara Pencoblosan agar Suara Sah: Panduan Lengkap di TPS Pilkada 2024"
    },
    {
      title: "Mahasiswa Hilang di Bantaran Kali Bengawan Madiun, Begini Kronologi Versi Pacar",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414027629/mahasiswa-hilang-di-bantaran-kali-bengawan-madiun-begini-kronologi-versi-pacar",
      description: "Mahasiswa Hilang di Bantaran Kali Bengawan Madiun, Begini Kronologi Versi Pacar"
    },
    {
      title: "Pernikahan Rizky Febian dan Mahalini Tidak Sah? Pengadilan Agama: Harus Menikah Ulang",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/hiburan/0414028454/pernikahan-rizky-febian-dan-mahalini-tidak-sah-pengadilan-agama-harus-menikah-ulang",
      description: "Pernikahan Rizky Febian dan Mahalini Tidak Sah? Pengadilan Agama: Harus Menikah Ulang"
    },
    {
      title: "Hasil Quick Count Pilkada Jatim 2024: Khofifah-Emil Unggul, Ini Selisihnya dengan Risma-Gus Hans",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414036188/hasil-quick-count-pilkada-jatim-2024-khofifah-emil-unggul-ini-selisihnya-dengan-risma-gus-hans?page=2",
      description: "Hasil Quick Count Pilkada Jatim 2024: Khofifah-Emil Unggul, Ini Selisihnya dengan Risma-Gus Hans"
    },
    {
      title: "Hasil Perolehan Suara Kabupaten dan Kota Madiun Pilkada Serentak 2024: Hari Wuryanto-Purnomo dan Maidi Bagus Unggul",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414040714/hasil-perolehan-suara-kabupaten-dan-kota-madiun-pilkada-serentak-2024-hari-wuryanto-purnomo-dan-maidi-bagus-unggul",
      description: "Hasil Perolehan Suara Kabupaten dan Kota Madiun Pilkada Serentak 2024: Hari Wuryanto-Purnomo dan Maidi Bagus Unggul"
    },
    {
      title: "Perolehan Suara Krisdayanti di Pilwalkot Batu Hanya 20 Persen, Begini Tanggapannya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414042581/perolehan-suara-krisdayanti-di-pilwalkot-batu-hanya-20-persen-begini-tanggapannya",
      description: "Perolehan Suara Krisdayanti di Pilwalkot Batu Hanya 20 Persen, Begini Tanggapannya"
    },
    {
      title: "Di Ambang Kekalahan, Tim Ridwan Kamil–Suswono Gelar Sayembara Berhadiah: Optimis Putaran Kedua",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414043685/di-ambang-kekalahan-tim-ridwan-kamil-suswono-gelar-sayembara-berhadiah-optimis-putaran-kedua",
      description: "Di Ambang Kekalahan, Tim Ridwan Kamil–Suswono Gelar Sayembara Berhadiah: Optimis Putaran Kedua"
    },
    {
      title: "Persiapkan Liburan Akhir Tahun: Daftar Tanggal Merah dan Cuti Bersama Desember 2024",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/gaya-hidup/0414047050/persiapkan-liburan-akhir-tahun-berikut-daftar-tanggal-merah-dan-cuti-bersama-desember-2024",
      description: "Persiapkan Liburan Akhir Tahun: Daftar Tanggal Merah dan Cuti Bersama Desember 2024"
    },
    {
      title: "Presiden Prabowo Menangis usai Umumkan Kenaikan Gaji Guru Tertinggi Sepanjang Sejarah RI",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414047478/presiden-prabowo-menangis-usai-umumkan-kenaikan-gaji-guru-tertinggi-sepanjang-sejarah-republik-indonesia",
      description: "Presiden Prabowo Menangis usai Umumkan Kenaikan Gaji Guru Tertinggi Sepanjang Sejarah RI"
    },
    {
      title: "Angin Segar Dunia Pendidikan 2025: Kenaikan Gaji Guru dan Pengurangan Beban Administrasi",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/pendidikan/0414047867/angin-segar-dunia-pendidikan-2025-kenaikan-gaji-guru-dan-pengurangan-beban-administrasi-tidak-perlu-ribet",
      description: "Angin Segar Dunia Pendidikan 2025: Kenaikan Gaji Guru dan Pengurangan Beban Administrasi"
    },
    {
      title: "Lansia Ditemukan Tewas Tergeletak di Depan Plaza Lawu Madiun, Penyebab Masih Diselidiki",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414069030/lansia-ditemukan-tewas-tergeletak-di-depan-plaza-lawu-madiun-penyebab-masih-diselidiki",
      description: "Lansia Ditemukan Tewas Tergeletak di Depan Plaza Lawu Madiun, Penyebab Masih Diselidiki"
    },
    {
      title: "Mahasiswi Bangkalan Tewas Dibakar Pacar: Minta Tanggung Jawab usai Dihamili",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414070086/mahasiswi-bangkalan-tewas-dibakar-pacar-minta-tanggung-jawab-usai-dihamili#google_vignette",
      description: "Mahasiswi Bangkalan Tewas Dibakar Pacar: Minta Tanggung Jawab usai Dihamili"
    },
    {
      title: "UMP 2025 Bakal Naik 6,5 Persen? Berikut Daftar Besaran Upah Minimum di 38 Provinsi",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414074109/ump-2025-bakal-naik-65-persen-berikut-daftar-besaran-upah-minimum-di-38-provinsi",
      description: "UMP 2025 Bakal Naik 6,5 Persen? Berikut Daftar Besaran Upah Minimum di 38 Provinsi"
    },
    {
      title: "Penjual Es Teh yang Dihina Gus Miftah Terima Banyak Bantuan: Beasiswa Pendidikan, Umroh, hingga Mahar Pernikahan Anak",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414083974/penjual-es-teh-yang-dihina-gus-miftah-terima-banyak-bantuan-beasiswa-pendidikan-umroh-hingga-mahar-pernikahan-anak",
      description: "Penjual Es Teh yang Dihina Gus Miftah Terima Banyak Bantuan: Beasiswa Pendidikan, Umroh, hingga Mahar Pernikahan Anak"
    },
    {
      title: "Banjir Simpati, Penjual Es Teh yang Dihina Gus Miftah Dapat Hadiah Umrah dari Ustadz Fakhrurrazi Anshar",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414081582/banjir-simpati-penjual-es-teh-yang-dihina-gus-miftah-dapat-hadiah-umrah-dari-ustadz-fakhrurrazi-anshar",
      description: "Banjir Simpati, Penjual Es Teh yang Dihina Gus Miftah Dapat Hadiah Umrah dari Ustadz Fakhrurrazi Anshar"
    },
    {
      title: "Netizen Desak Prabowo Copot Gus Miftah dari Utusan Presiden: Pecat Pak, Tolong Dengarkan Rakyat",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414081783/netizen-desak-prabowo-copot-gus-miftah-dari-utusan-presiden-pecat-pak-tolong-dengarkan-rakyat",
      description: "Netizen Desak Prabowo Copot Gus Miftah dari Utusan Presiden: Pecat Pak, Tolong Dengarkan Rakyat"
    },
    {
      title: "Sambut Libur Nataru, Kemenhub Sediakan Angkutan Motor Gratis dengan KA: Link Pendaftarannya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414089572/sambut-libur-nataru-kemenhub-sediakan-angkutan-motor-gratis-dengan-ka-ini-link-pendaftarannya",
      description: "Sambut Libur Nataru, Kemenhub Sediakan Angkutan Motor Gratis dengan KA: Link Pendaftarannya"
    },
    {
      title: "Polisi tak Bisa Asal Tembak: Aturan Penggunaan Senjata Api oleh Aparat Kepolisian",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414090782/polisi-tak-bisa-asal-tembak-begini-aturan-penggunaan-senjata-api-oleh-aparat-kepolisian",
      description: "Polisi tak Bisa Asal Tembak: Aturan Penggunaan Senjata Api oleh Aparat Kepolisian"
    },
    {
      title: "Jubir Kepresidenan Pakai Istilah 'Rakyat Jelata' saat Komentari Kasus Gus Miftah, Tuai Kritik Warganet",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0414096456/jubir-kepresidenan-pakai-istilah-rakyat-jelata-saat-komentari-kasus-gus-miftah-tuai-kritik-warganet",
      description: "Jubir Kepresidenan Pakai Istilah 'Rakyat Jelata' saat Komentari Kasus Gus Miftah, Tuai Kritik Warganet"
    },
    {
      title: "Beda dengan Jokowi? Besaran Uang Pensiun Ma'ruf Amin hingga Bakal Kediamannya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413607244/beda-dengan-jokowi-segini-besaran-uang-pensiun-maruf-amin-hingga-bakal-kediamannya",
      description: "Beda dengan Jokowi? Besaran Uang Pensiun Ma'ruf Amin hingga Bakal Kediamannya"
    },
    {
      title: "Iriana Jokowi Minta Maaf sebelum Purna Tugas, Warganet Beri Beragam Komentar",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413611305/iriana-jokowi-minta-maaf-sebelum-purna-tugas-warganet-beri-beragam-komentar",
      description: "Iriana Jokowi Minta Maaf sebelum Purna Tugas, Warganet Beri Beragam Komentar"
    },
    {
      title: "Masih Banyak yang Bingung, Ini 3 Kategori PPPK: Wajib Paham sebelum Mendaftar",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413623708/masih-banyak-yang-bingung-ini-3-kategori-pppk-wajib-paham-sebelum-mendaftar",
      description: "Masih Banyak yang Bingung, Ini 3 Kategori PPPK: Wajib Paham sebelum Mendaftar"
    },
    {
      title: "KAI Services Buka Lowongan Pramugara dan Pramugari Kereta Api: Simak Persyaratannya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/ekonomi/0413632982/kai-services-buka-lowongan-pramugara-dan-pramugari-kereta-api-simak-persyaratannya",
      description: "KAI Services Buka Lowongan Pramugara dan Pramugari Kereta Api: Simak Persyaratannya"
    },
    {
      title: "Mayora Buka Lowongan Kerja: 8 Posisi yang Ditawarkan beserta Persyaratannya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/ekonomi/0413633406/mayora-buka-lowongan-kerja-ini-8-posisi-yang-ditawarkan-beserta-persyaratannya",
      description: "Mayora Buka Lowongan Kerja: 8 Posisi yang Ditawarkan beserta Persyaratannya"
    },
    {
      title: "Paragon Buka Lowongan Kerja, Lulusan SMA Bisa Daftar: Cek Syarat dan Kualifikasinya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/semarang-raya/0413638688/paragon-buka-lowongan-kerja-lulusan-sma-bisa-daftar-cek-syarat-dan-kualifikasinya",
      description: "Paragon Buka Lowongan Kerja, Lulusan SMA Bisa Daftar: Cek Syarat dan Kualifikasinya"
    },
    {
      title: "Mayora Group Buka Lowongan Admin: Syarat dan Tata Cara Melamar",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413638821/mayora-group-buka-lowongan-admin-simak-syarat-dan-tata-cara-melamar",
      description: "Mayora Group Buka Lowongan Admin: Syarat dan Tata Cara Melamar"
    },
    {
      title: "PT Charoen Pokphand Indonesia Buka Lowongan Kerja: Posisi dan Kualifikasinya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413639166/pt-charoen-pokphand-indonesia-buka-lowongan-kerja-simak-posisi-dan-kualifikasinya",
      description: "PT Charoen Pokphand Indonesia Buka Lowongan Kerja: Posisi dan Kualifikasinya"
    },
    {
      title: "Pertamax Makin Murah: Intip Harga BBM Terbaru Wilayah Pulau Jawa Berlaku Mulai 1 Oktober 2024",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/ekonomi/0413650897/pertamax-makin-murah-intip-harga-bbm-terbaru-wilayah-pulau-jawa-berlaku-mulai-hari-ini-1-oktober-2024",
      description: "Pertamax Makin Murah: Intip Harga BBM Terbaru Wilayah Pulau Jawa Berlaku Mulai 1 Oktober 2024"
    },
    {
      title: "Ada Verrel Bramasta hingga Melly Goeslaw: Deretan Selebriti Dilantik Jadi Anggota DPR RI",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413650391/ada-verrel-bramasta-hingga-melly-goeslaw-ini-deretan-selebriti-yang-dilantik-jadi-anggota-dpr-ri",
      description: "Ada Verrel Bramasta hingga Melly Goeslaw: Deretan Selebriti Dilantik Jadi Anggota DPR RI"
    },
    {
      title: "Sosok Mahasiswa Universitas Petra Surabaya Diduga Tewas Bunuh Diri: Masih Tahun Kedua Kuliah",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413653907/sosok-mahasiswa-universitas-petra-surabaya-yang-diduga-tewas-bunuh-diri-masih-tahun-kedua-kuliah",
      description: "Sosok Mahasiswa Universitas Petra Surabaya Diduga Tewas Bunuh Diri: Masih Tahun Kedua Kuliah"
    },
    {
      title: "Pemutihan Pajak Kendaraan di Jatim hingga 30 November 2024: Persyaratan Lengkap",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413665543/pemutihan-pajak-kendaraan-di-jatim-hingga-30-november-2024-simak-persyaratan-lengkapnya",
      description: "Pemutihan Pajak Kendaraan di Jatim hingga 30 November 2024: Persyaratan Lengkap"
    },
    {
      title: "Jumlah Kasus Bunuh Diri di Indonesia Sepanjang 2024 Meningkat, Paling Banyak di Usia Ini",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/semarang-raya/0413672766/jumlah-kasus-bunuh-diri-di-indonesia-sepanjang-2024-meningkat-paling-banyak-di-usia-ini",
      description: "Jumlah Kasus Bunuh Diri di Indonesia Sepanjang 2024 Meningkat, Paling Banyak di Usia Ini"
    },
    {
      title: "Penempatan di Surabaya: Lowongan Pekerjaan yang Tersedia Periode Oktober 2024",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413673247/penempatan-di-surabaya-ini-lowongan-pekerjaan-yang-tersedia-periode-oktober-2024?page=4",
      description: "Penempatan di Surabaya: Lowongan Pekerjaan yang Tersedia Periode Oktober 2024"
    },
    {
      title: "HUT ke-79 TNI: Rekrutmen Prajurit TNI yang Sedang Dibuka, Simak Cara Mendaftarnya",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/nasional/0413678216/hut-ke-79-tni-ini-rekrutmen-prajurit-tni-yang-sedang-dibuka-simak-cara-mendaftarnya",
      description: "HUT ke-79 TNI: Rekrutmen Prajurit TNI yang Sedang Dibuka, Simak Cara Mendaftarnya"
    },
    {
      title: "Dari Nol hingga Sukses: Kisah Inspiratif Nanang Bangun Bisnis Kuliner Ayam Goreng Nelongso",
      source: "Suara Merdeka",
      url: "https://www.suaramerdeka.com/ekonomi/0413681030/dari-nol-hingga-sukses-inilah-kisah-inspiratif-nanang-bangun-bisnis-kuliner-ayam-goreng-nelongso",
      description: "Dari Nol hingga Sukses: Kisah Inspiratif Nanang Bangun Bisnis Kuliner Ayam Goreng Nelongso"
    }
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');

  // Filter berita berdasarkan kategori jika ada
  const filteredNews = category 
    ? newsData.filter(news => news.source === category)
    : newsData;

  // Pagination: 20 items per page using `page` query parameter
  const pageSize = 20;
  const totalPages = Math.max(1, Math.ceil(filteredNews.length / pageSize));
  const currentPageRaw = parseInt(searchParams.get('page') || '1', 10);
  const currentPage = Math.min(
    Math.max(1, isNaN(currentPageRaw) ? 1 : currentPageRaw),
    totalPages
  );
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedNews = filteredNews.slice(startIndex, endIndex);

  const goToPage = (p) => {
    const nextPage = Math.min(Math.max(1, p), totalPages);
    const params = new URLSearchParams(searchParams);
    if (nextPage === 1) {
      params.delete('page');
    } else {
      params.set('page', String(nextPage));
    }
    setSearchParams(params);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="py-6 border-b border-pink-500/20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">Berita Terkini</h1>
          <a href="#/" className="inline-flex items-center text-pink-500 hover:text-pink-400 font-semibold">
            <ArrowLeft className="mr-2 w-4 h-4" /> Kembali ke Beranda
          </a>
        </div>
      </header>

      <main className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Kumpulan <span className="text-pink-500">Berita</span>
            </h2>
            <p className="text-gray-400 mt-3">Isu-isu aktual dan informatif.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {paginatedNews.map((news, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-900 to-black border border-pink-500/20 rounded-2xl overflow-hidden hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:-translate-y-2">
                <div className="p-6 space-y-3">
                  <div className="text-sm text-pink-500 font-semibold">{news.source}</div>
                  <h3 className="text-lg sm:text-xl font-bold group-hover:text-pink-500 transition-colors duration-300 break-words">{news.title}</h3>
                  <p className="text-gray-400 break-words">{news.description}</p>
                  <a
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 font-semibold inline-flex items-center group-hover:gap-2 transition-all pt-2"
                  >
                    Baca selengkapnya <ExternalLink className="ml-1 w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage <= 1}
                className={`px-3 py-2 rounded border ${currentPage <= 1 ? 'border-gray-700 text-gray-500' : 'border-pink-500/40 text-pink-400 hover:border-pink-500 hover:text-pink-300'}`}
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`px-3 py-2 rounded border ${p === currentPage ? 'border-pink-500 bg-pink-500/10 text-white' : 'border-pink-500/30 text-pink-400 hover:border-pink-500 hover:text-pink-300'}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className={`px-3 py-2 rounded border ${currentPage >= totalPages ? 'border-gray-700 text-gray-500' : 'border-pink-500/40 text-pink-400 hover:border-pink-500 hover:text-pink-300'}`}
              >
                Next
              </button>
            </div>
            <div className="text-gray-400 text-sm">
              Halaman {currentPage} dari {totalPages} • Menampilkan {paginatedNews.length} dari {filteredNews.length} artikel
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
