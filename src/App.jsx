import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Pen, Edit3, TrendingUp, Instagram, Linkedin, Mail, Github, Star, Award, Users, Briefcase, ChevronDown, ExternalLink, FileText, Video, Image, MessageCircle } from 'lucide-react';
import arizqaProfile from './assets/arizqa.jpeg';
import cvArizqa from './assets/cvarizqa.pdf';

export default function ArizqaPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  // Helper to scroll to section IDs without modifying the router hash
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Intersection Observer for scroll animations
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8;
        if (isInView) {
          el.classList.add('is-visible');
        }
      });
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const services = [
    {
      icon: <Pen className="w-10 h-10" />,
      title: "Content Writing",
      description: "Menciptakan konten yang engaging dan SEO-friendly untuk berbagai platform digital. Dari artikel blog hingga copywriting yang persuasif.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Edit3 className="w-10 h-10" />,
      title: "Content Editing",
      description: "Menyempurnakan konten dengan editing profesional untuk memastikan pesan tersampaikan dengan jelas dan efektif.",
      gradient: "from-fuchsia-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Digital Marketing",
      description: "Strategi pemasaran digital yang komprehensif untuk meningkatkan brand awareness dan engagement di media sosial.",
      gradient: "from-rose-500 to-pink-600"
    }
  ];

  // Stats section removed per request

  const portfolioItems = [
    {
      category: "written",
      title: "Content Writing",
      description: "Produk review, recomendation, evergreen articles",
      // type: "Article",
      gradient: "from-pink-600 to-rose-600",
      icon: <Pen className="w-12 h-12" />,
      link: "#/content-writing"
    },
    {
      category: "written",
      title: "News",
      description: "Report, Editorial, and Community Spotlight",
      // type: "Book",
      gradient: "from-fuchsia-600 to-pink-600",
      icon: <FileText className="w-12 h-12" />,
      link: "#/news"
    },
    
    {
      category: "written",
      title: "Copyediting",
      description: "Strategic SEO and keyword optimization",
      // type: "Strategy",
      gradient: "from-pink-500 to-fuchsia-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
          />
        </svg>
      ),
      link: "#/content-editing"
    },
    {
      category: "written",
      title: "Proofreading & Translation",
      description: "Grammar and linguistic refinement",
      // type: "Video",
      gradient: "from-rose-500 to-pink-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
      )
    },
    {
      category: "spoken",
      title: "Language Tutor ",
      description: "Indonesian and English language learning guide",
      // type: "Campaign",
      gradient: "from-rose-600 to-pink-700",
      icon: <MessageCircle className="w-12 h-12" />,
      link: "#/language-tutor"
    },
    {
      category: "spoken",
      title: "Speaker and MC",
      description: "Persuasive rhetoric communication",
      // type: "Planning",
      gradient: "from-fuchsia-600 to-rose-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
          />
        </svg>
      ),
      link: "#/speaker-mc"
    }
  ];

  const skills = [
    "SEO Copywriting",
    "Landing Page",
    "Research Tools",
    "Marketing Strategy",
    "Google Workspace",
    "Microsoft Suites"
  ];

  const filteredPortfolio = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Custom Cursor Follower */}
      <div 
        className="hidden md:block fixed w-6 h-6 bg-pink-500 rounded-full pointer-events-none z-50 mix-blend-screen transition-transform duration-300 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(10px)',
          opacity: 0.5
        }}
      ></div>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg shadow-pink-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="text-2xl font-bold">
              <span className="text-pink-500">Arizqa</span>
              <span className="text-white "> Novi Ramadhani</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-pink-500 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="hidden md:block">
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 font-medium"
              >
                Let's Work Together
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-lg border-t border-pink-500/20">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="block text-gray-300 hover:text-pink-500 transition-colors font-medium py-2 text-left w-full"
                  onClick={() => { setIsMenuOpen(false); scrollToSection(item.toLowerCase()); }}
                >
                  {item}
                </button>
              ))}
              <button
                type="button"
                onClick={() => { setIsMenuOpen(false); scrollToSection('contact'); }}
                className="w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 font-medium mt-4"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-fuchsia-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center animate-fade-in-up">
            <div className="text-center md:text-left space-y-8 order-2 md:order-1">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-full text-pink-400 text-sm font-semibold mb-6 backdrop-blur-sm animate-slide-down">
              ✨ Content Writer | Linguistic Scholar
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Hello! <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 bg-clip-text text-transparent animate-gradient"> Arizqa </span>Novi Ramadhani here
            </h1>
            
            {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Ramadhani here
            </h2> */}
            
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl md:max-w-xl mx-auto md:mx-0 leading-relaxed break-words animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              Arizqa is a seasoned digital content writer specializing in robust language expertise for impactful brand messaging. Certified competent since 2022, she excels in merging copywriting skills with strategic digital execution. Her dynamic approach, supported by strong interpersonal and leadership skills, drives success across the creative industry, education, and social fields.
            </p>

              <div className="flex flex-col items-center md:items-start sm:flex-row gap-4 justify-center md:justify-start pt-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                
                <a href={cvArizqa} target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500/10 transition-all duration-300 font-bold text-lg hover:scale-105 active:scale-95">
                    Download CV
                  </button>
                </a>
                <button
                  type="button"
                  onClick={() => scrollToSection('portfolio')}
                  className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 font-bold text-lg flex items-center justify-center hover:scale-105 active:scale-95"
                >
                  Portfolio
                  <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="mt-12 md:mt-0 flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-pink-500/60 shadow-2xl shadow-pink-500/30 bg-gradient-to-tr from-pink-500/20 to-rose-500/30">
                <img
                  src={arizqaProfile}
                  alt="Arizqa Novi Ramadhani profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section removed per request */}

      {/* Services Section */}
      {/* <section id="services" className="py-32 bg-black animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold animate-fade-in-up">
              Layanan <span className="text-pink-500">Saya</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Solusi lengkap untuk kebutuhan konten dan pemasaran digital Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-pink-500/20 rounded-2xl p-8 hover:border-pink-500 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/30"
                style={{
                  animation: `fadeInScale 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 space-y-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-pink-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="text-pink-500 font-semibold flex items-center group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold animate-fade-in-up">
              Language <span className="text-pink-500">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Beberapa proyek bahasa yang telah saya kerjakan
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'written', 'spoken'].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-500/50 scale-105'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 hover:scale-105'
                }`}
                style={{
                  animation: `fadeInScale 0.4s ease-out ${index * 0.1}s both`
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPortfolio.map((item, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black border border-pink-500/20 rounded-2xl overflow-hidden hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:-translate-y-2 hover:rotate-1"
                style={{
                  animation: `fadeInScale 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <div className={`bg-gradient-to-br ${item.gradient} aspect-video flex items-center justify-center text-white p-8 relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                  <div className="relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">{item.icon}</div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="text-sm text-pink-500 font-semibold">{item.type}</div>
                  <h3 className="text-xl font-bold group-hover:text-pink-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-pink-500 font-semibold flex items-center group-hover:gap-2 transition-all pt-2"
                    >
                      View Details <ExternalLink className="ml-1 w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-pink-500 font-semibold flex items-center group-hover:gap-2 transition-all pt-2">
                      View Details <ExternalLink className="ml-1 w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 md:py-32 bg-gradient-to-b from-black to-gray-900 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-pink-500 mb-8 text-center">Skills</h3>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((name, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-pink-500/20 hover:border-pink-500 transition-colors"
                    style={{ animation: `fadeInScale 0.4s ease-out ${index * 0.1}s both` }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course and Certifications */}
      <section id="certifications" className="py-20 bg-gradient-to-b from-gray-900 to-black animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-pink-500/20 bg-gradient-to-br from-gray-900/70 to-black/70 p-8 md:p-12 shadow-2xl">
            <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-white/5 text-pink-300 text-sm font-semibold">
                <Award className="w-4 h-4" />
                Certificates
              </div>

              <h3 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 bg-clip-text text-transparent">Training and Certifications</span>
              </h3>

              {/* <p className="text-gray-400 max-w-2xl mx-auto">
                Kumpulan sertifikat pelatihan dan kursus yang relevan dengan content writing, marketing, dan tools pendukung.
              </p> */}

              <div className="pt-2">
                <a href="https://drive.google.com/drive/folders/1sYwTGHp2-njtcNhMiQ-Dxm667ErBk9iu?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300 font-bold hover:scale-105 active:scale-95">
                    View Folder
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 md:py-16 bg-gradient-to-br from-pink-600 via-rose-600 to-fuchsia-600 relative overflow-hidden animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="text-1xl md:text-4xl font-bold text-white animate-fade-in-up">
             Let's collab and create something impactful!
          </h2>
          {/* <p className="text-xl text-pink-100 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Siap untuk mengembangkan konten yang menarik dan strategi pemasaran digital yang efektif? Mari diskusikan proyek Anda!
          </p> */}
          
          <div className="flex flex-col items-center sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            
            {/* <a href="https://wa.me/62123456789" target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-5 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-bold text-lg hover:scale-105 hover:-translate-y-1 active:scale-95">
                WhatsApp Saya
              </button>
            </a> */}
          </div>

          <div className="pt-6 text-pink-50 text-lg font-semibold animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            Reach me:
          </div>

          <div className="flex justify-center gap-6 pt-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a href="https://www.instagram.com/ramadhanirizqaa/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-pink-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
              <Instagram size={24} />
            </a>
            <a href="https://wa.me/6285812115605" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-pink-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-6 h-6 fill-current"
                aria-hidden="true"
              >
                <path d="M16 3C9.373 3 4 8.373 4 15c0 2.115.553 4.067 1.607 5.8L4 29l8.39-1.57C13.99 28.45 14.986 28.7 16 28.7 22.627 28.7 28 23.327 28 16.7 28 10.073 22.627 4.7 16 4.7zm0 2.6c5.01 0 9.1 4.09 9.1 9.1 0 5.01-4.09 9.1-9.1 9.1-.84 0-1.665-.12-2.455-.357l-.44-.13-4.96.93.95-4.84-.145-.25C8.36 20 7.9 18.38 7.9 16.7 7.9 9.99 11.99 5.6 16 5.6zm-4.03 4.4c-.22 0-.565.08-.86.4-.295.32-1.13 1.104-1.13 2.69 0 1.585 1.16 3.118 1.32 3.335.16.217 2.23 3.55 5.52 4.834 2.73 1.08 3.29.866 3.88.81.59-.056 1.91-.78 2.18-1.533.27-.753.27-1.398.19-1.533-.08-.135-.295-.215-.62-.377-.325-.162-1.92-.947-2.22-1.055-.295-.108-.51-.162-.72.163-.21.325-.825 1.055-1.01 1.27-.186.217-.37.244-.695.082-.325-.162-1.37-.505-2.61-1.61-.966-.86-1.62-1.92-1.81-2.245-.19-.325-.02-.5.143-.662.147-.147.325-.383.487-.575.162-.19.216-.325.325-.54.108-.216.054-.406-.027-.568-.08-.162-.72-1.77-.985-2.42-.24-.6-.49-.62-.71-.63z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/arizqa-novi-ramadhani" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-pink-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
              <Linkedin size={24} />
            </a>
            {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-pink-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
              <Github size={24} />
            </a> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-pink-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="text-2xl font-bold">
              <span className=" text-pink-500">Arizqa</span>
              <span className="text-white"> Novi Ramadhani</span>
            </div>
            <p className="text-gray-400">
              Language Practitioner | Digital Content Writer
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Arizqa Novi Ramadhani. Hak cipta dilindungi undang-undang.
            </p>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }

        .animate-slide-down {
          animation: slideDown 0.6s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .skill-bar-animate {
          width: 0;
          animation: skillBarGrow 1.5s ease-out forwards;
        }

        @keyframes skillBarGrow {
          to {
            width: var(--target-width);
          }
        }

        .animate-on-scroll {
          transition: all 0.8s ease-out;
        }

        .animate-on-scroll.is-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .counter-animate {
          animation: countUp 2s ease-out;
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ec4899, #f43f5e);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #f43f5e, #ec4899);
        }
      `}</style>
    </div>
  );
}