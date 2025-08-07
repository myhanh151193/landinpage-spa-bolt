import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">Serenity Spa</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Trang Chủ
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Dịch Vụ
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Giới Thiệu
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Hình Ảnh
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Bài Viết
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Liên Hệ
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+84 28 1234 5678</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>123 Nguyễn Huệ, Q1</span>
            </div>
            <a
              href="/admin"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300"
            >
              Admin
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2">
                Trang Chủ
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2">
                Dịch Vụ
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2">
                Giới Thiệu
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2">
                Hình Ảnh
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2">
                Bài Viết
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2">
                Liên Hệ
              </button>
              <div className="pt-2 border-t border-gray-200">
                <div className="flex items-center space-x-1 text-sm text-gray-600 mb-2">
                  <Phone className="w-4 h-4" />
                  <span>+84 28 1234 5678</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>123 Nguyễn Huệ, Q1</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;