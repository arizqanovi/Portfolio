import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Pen, Edit3, TrendingUp, Instagram, Linkedin, Mail, Github, Star, Award, Users, Briefcase, ChevronDown, ExternalLink, FileText, Video, Image } from 'lucide-react';

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
      type: "Article",
      gradient: "from-pink-600 to-rose-600",
      icon: <FileText className="w-12 h-12" />,
      link: "#/content-writing"
    },
    {
      category: "written",
      title: "News",
      description: "Report, Editorial, and Community Spotlight",
      type: "Book",
      gradient: "from-fuchsia-600 to-pink-600",
      icon: <Edit3 className="w-12 h-12" />,
      link: "#/news"
    },
    {
      category: "spoken",
      title: "Language Tutor ",
      description: "Kampanye media sosial yang meningkatkan engagement 300%",
      type: "Campaign",
      gradient: "from-rose-600 to-pink-700",
      icon: <TrendingUp className="w-12 h-12" />
    },
    {
      category: "written",
      title: "Centent Editing",
      description: "Strategic SEO and keyword optimization",
      type: "Strategy",
      gradient: "from-pink-500 to-fuchsia-500",
      icon: <FileText className="w-12 h-12" />
    },
    {
      category: "written",
      title: "Proofreading & Translation",
      description: "Grammar and linguistic refinement",
      type: "Video",
      gradient: "from-rose-500 to-pink-600",
      icon: <Video className="w-12 h-12" />
    },
    {
      category: "spoken",
      title: "Speaker and MC",
      description: "Perencanaan konten brand untuk meningkatkan brand awareness",
      type: "Planning",
      gradient: "from-fuchsia-600 to-rose-600",
      icon: <Image className="w-12 h-12" />
    }
  ];

  const skills = [
    { name: "Content Writing", level: 95 },
    { name: "SEO Optimization", level: 90 },
    { name: "Content Strategy", level: 88 },
    { name: "Copywriting", level: 92 },
    { name: "Social Media Marketing", level: 87 },
    { name: "Content Editing", level: 93 }
  ];

  const filteredPortfolio = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Custom Cursor Follower */}
      <div 
        className="fixed w-6 h-6 bg-pink-500 rounded-full pointer-events-none z-50 mix-blend-screen transition-transform duration-300 ease-out"
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
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold">
              <span className="text-white">Arizqa</span>
              <span className="text-pink-500"> Novi</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
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
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
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
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-fuchsia-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-full text-pink-400 text-sm font-semibold mb-6 backdrop-blur-sm animate-slide-down">
              ✨ Kreator Konten & Digital Marketer
            </div>
            
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Hello! <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 bg-clip-text text-transparent animate-gradient"> Arizqa </span>Novi Ramadhani here
            </h1>
            
            {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Ramadhani here
            </h2> */}
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              Arizqa is a versatile digital branding associate with language expertise. Novi has experience in content creation since 2022. She is currently certified as competent in Digital Marketing with copywriting skills. Leadership and skilled interpersonal communication make her dynamic toward the developments in the creative industry, education, and social fields.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <a href="#portfolio">
                <button className="group px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 font-bold text-lg flex items-center justify-center hover:scale-105 active:scale-95">
                  Portfolio
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="#contact">
                <button className="px-8 py-4 border-2 border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500/10 transition-all duration-300 font-bold text-lg hover:scale-105 active:scale-95">
                  Download Cv
                </button>
              </a>
            </div>

            {/* <div className="flex justify-center gap-6 pt-8 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-pink-500/30 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-600 hover:to-rose-600 hover:border-transparent transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-pink-500/30 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-600 hover:to-rose-600 hover:border-transparent transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-pink-500/30 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-600 hover:to-rose-600 hover:border-transparent transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Github size={20} />
              </a>
              <a href="mailto:arizqa@example.com" className="w-12 h-12 bg-white/5 border border-pink-500/30 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-600 hover:to-rose-600 hover:border-transparent transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Mail size={20} />
              </a>
            </div> */}
          </div>

          <div className="mt-20 flex justify-center">
            <ChevronDown className="w-8 h-8 text-pink-500 animate-bounce-slow" />
          </div>
        </div>
      </section>

      {/* Stats Section removed per request */}

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-black to-gray-900 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="text-pink-500">Me</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Saya adalah seorang content writer, editor, dan digital marketer yang passionate dalam menciptakan konten yang meaningful dan impactful. Dengan pengalaman bertahun-tahun di industri digital, saya telah membantu berbagai brand dan bisnis untuk mengembangkan presence online mereka.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Keahlian saya meliputi content creation, SEO optimization, copywriting, content strategy, dan social media marketing. Saya percaya bahwa konten yang baik tidak hanya informatif, tetapi juga mampu menginspirasi dan menggerakkan audiens.
              </p>
              {/* <div className="pt-6">
                <a href="#contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 font-bold hover:scale-105 active:scale-95">
                    Unduh CV
                  </button>
                </a>
              </div> */}
            </div>

            {/* Keahlian Saya dipindahkan ke section baru tepat di atas Contact */}
          </div>
        </div>
      </section>

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
      <section id="portfolio" className="py-32 bg-gradient-to-b from-gray-900 to-black animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section id="skills" className="py-32 bg-gradient-to-b from-black to-gray-900 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-pink-500 mb-8 text-center">Keahlian Saya</h3>
            <div className="max-w-3xl mx-auto">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-pink-500">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-600 to-rose-600 rounded-full skill-bar-animate"
                      style={{
                        '--target-width': `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-pink-600 via-rose-600 to-fuchsia-600 relative overflow-hidden animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white animate-fade-in-up">
            Mari Ciptakan Sesuatu yang Luar Biasa Bersama
          </h2>
          <p className="text-xl text-pink-100 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Siap untuk mengembangkan konten yang menarik dan strategi pemasaran digital yang efektif? Mari diskusikan proyek Anda!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <a href="mailto:ramadhaninovi98@gmail.com">
              <button className="group px-10 py-5 bg-white text-pink-600 rounded-lg hover:bg-pink-50 transition-all duration-300 font-bold text-lg flex items-center justify-center shadow-2xl hover:scale-105 hover:-translate-y-1 active:scale-95">
                Kirim Email
                <Mail className="ml-2 group-hover:rotate-12 transition-transform" />
              </button>
            </a>
            {/* <a href="https://wa.me/62123456789" target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-5 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-bold text-lg hover:scale-105 hover:-translate-y-1 active:scale-95">
                WhatsApp Saya
              </button>
            </a> */}
          </div>

          <div className="flex justify-center gap-6 pt-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a href="https://www.instagram.com/ramadhanirizqaa/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-pink-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
              <Instagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-pink-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
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
              <span className="text-white">Arizqa</span>
              <span className="text-pink-500"> Novi Ramadhani</span>
            </div>
            <p className="text-gray-400">
              Content Writer | Editor | Digital Marketer
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