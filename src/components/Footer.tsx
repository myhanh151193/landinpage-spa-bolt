import React from 'react';
import { MapPin, Phone, Mail, Facebook, Zap, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">Serenity Spa</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Thiên đường thư giãn và làm đẹp hàng đầu tại Việt Nam. 
              Nơi bạn tìm lại sự cân bằng và vẻ đẹp tự nhiên.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/serenityspa"
                className="bg-gray-800 hover:bg-emerald-600 p-3 rounded-full transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://zalo.me/0901234567"
                className="bg-gray-800 hover:bg-emerald-600 p-3 rounded-full transition-colors duration-300"
              >
                <Zap className="w-5 h-5" />
              </a>
              <a
                href="https://m.me/serenityspa"
                className="bg-gray-800 hover:bg-emerald-600 p-3 rounded-full transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Liên Kết Nhanh</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  Trang Chủ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  Dịch Vụ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  Giới Thiệu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  Hình Ảnh
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  Bài Viết
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('booking')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  Đặt Lịch
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  Liên Hệ
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Dịch Vụ Nổi Bật</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Chăm Sóc Da Mặt</li>
              <li className="text-gray-300">Massage Thư Giãn</li>
              <li className="text-gray-300">Liệu Pháp Thảo Dược</li>
              <li className="text-gray-300">Gói VIP Premium</li>
              <li className="text-gray-300">Tắm Khoáng Nóng</li>
              <li className="text-gray-300">Chăm Sóc Cơ Thể</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Thông Tin Liên Hệ</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                <div className="text-gray-300">
                  123 Nguyễn Huệ, Quận 1<br />
                  TP. Hồ Chí Minh
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 mt-1" />
                <div className="text-gray-300">
                  +84 28 1234 5678<br />
                  +84 901 234 567
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-1" />
                <div className="text-gray-300">
                  info@serenityspa.com<br />
                  booking@serenityspa.com
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-6">
              <h4 className="font-semibold text-emerald-400 mb-2">Giờ Mở Cửa</h4>
              <div className="text-gray-300 text-sm">
                <div>Thứ 2 - Thứ 7: 8:00 - 22:00</div>
                <div>Chủ Nhật: 9:00 - 21:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Đăng Ký Nhận Ưu Đãi</h3>
            <p className="text-gray-300 mb-6">
              Nhận thông tin về các chương trình khuyến mãi và dịch vụ mới nhất
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Serenity Spa. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in Vietnam</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300">
              Chính Sách Bảo Mật
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300">
              Điều Khoản Sử Dụng
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300">
              Chính Sách Hoàn Tiền
            </a>
            <a href="/admin" className="hover:text-emerald-400 transition-colors duration-300">
              Admin Panel
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              Về Đầu Trang ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;