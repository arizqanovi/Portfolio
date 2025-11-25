import React from 'react';
import { ArrowLeft } from 'lucide-react';
import photo1 from '../assets/foto/DSC01205.jpg';
import photo2 from '../assets/foto/IMG_6461.jpg';

export default function SpeakerMC() {
  const experiences = [
    'Presenter Seminar Internasional Riksa Bahasa XIX UPI',
    'Mentor Public Speaking Class Lingkar Prestasi FIB Unair',
    'Sosialisasi KIP-K Goes to School Kabupaten Madiun',
    'Mentor Pengantar Linguistik Umum MBB HMD Sasindo Unair',
    'MC of 20+ events',
  ];

  const photos = [
    { src: photo2, alt: 'Speaking Event 2' },
    { src: photo1, alt: 'Speaking Event 1' },
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
          </div>

          <ul className="space-y-4 list-disc list-inside text-gray-100 mb-12">
            {experiences.map((item, idx) => (
              <li key={idx} className="text-sm sm:text-base leading-relaxed">
                {item}
              </li>
            ))}
          </ul>

          {/* Photo Gallery Section */}
          <div className="mt-12">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">
              Gallery <span className="text-pink-500">Moments</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {photos.map((photo, index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-pink-500/20 hover:border-pink-500 transition-all duration-300">
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}