import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function LanguageTutor() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="py-6 border-b border-pink-500/20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Language Tutor Experience</h1>
          <a href="#/" className="inline-flex items-center text-pink-500 hover:text-pink-400 font-semibold">
            <ArrowLeft className="mr-2 w-4 h-4" /> Kembali ke Beranda
          </a>
        </div>
      </header>

      <main className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Teaching <span className="text-pink-500">Experience</span>
            </h2>
            <p className="text-gray-400 mt-3">
              Ringkasan pengalaman mengajar bahasa Indonesia dan Inggris.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-pink-500/20 rounded-2xl p-6">
              <h3 className="text-lg sm:text-xl font-bold text-pink-400 mb-1">
                English Intensive Class
              </h3>
              <p className="text-gray-300 font-semibold mb-1">
                SD Khadijah Pandegiling Surabaya
              </p>
              <p className="text-gray-400 text-sm mb-3">2024 - 2025</p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Mengajar kelas intensif bahasa Inggris untuk siswa sekolah dasar dengan fokus pada
                kosakata praktis, percakapan sehari-hari, dan kepercayaan diri saat berbicara.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-pink-500/20 rounded-2xl p-6">
              <h3 className="text-lg sm:text-xl font-bold text-pink-400 mb-1">
                Private Tutor
              </h3>
              <p className="text-gray-300 font-semibold mb-1">Indonesian & English</p>
              <p className="text-gray-400 text-sm mb-3">2023 - 2024</p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Memberikan les privat bahasa Indonesia dan Inggris untuk pelajar dengan kebutuhan
                berbeda, mulai dari persiapan ujian hingga peningkatan kemampuan komunikasi sehari-hari.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
