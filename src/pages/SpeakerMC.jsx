import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function SpeakerMC() {
  const experiences = [
    'Presenter Seminar Internasional Riksa Bahasa XIX UPI',
    'Mentor Public Speaking Class Lingkar Prestasi FIB Unair',
    'Sosialisasi KIP-K Goes to School Kabupaten Madiun',
    'Mentor Pengantar Linguistik Umum MBB HMD Sasindo Unair',
    'MC of 20+ events',
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="py-6 border-b border-pink-500/20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Speaker and MC</h1>
          <a href="#/" className="inline-flex items-center text-pink-500 hover:text-pink-400 font-semibold">
            <ArrowLeft className="mr-2 w-4 h-4" /> Kembali ke Beranda
          </a>
        </div>
      </header>

      <main className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Speaking <span className="text-pink-500">Experience</span>
            </h2>
            <p className="text-gray-400 mt-3">
              Beberapa pengalaman sebagai presenter, mentor, dan MC di berbagai kegiatan.
            </p>
          </div>

          <ul className="space-y-4 list-disc list-inside text-gray-100">
            {experiences.map((item, idx) => (
              <li key={idx} className="text-sm sm:text-base leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
