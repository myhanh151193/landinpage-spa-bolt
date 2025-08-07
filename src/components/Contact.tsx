import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Zap, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hãy để lại thông tin để được tư vấn miễn phí về các dịch vụ spa phù hợp nhất
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Gửi Tin Nhắn
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Họ và Tên *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 bg-white"
                      placeholder="Nhập họ và tên"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 bg-white"
                      placeholder="Nhập email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Chủ đề
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 bg-white"
                  >
                    <option value="">Chọn chủ đề</option>
                    <option value="booking">Đặt lịch hẹn</option>
                    <option value="services">Tư vấn dịch vụ</option>
                    <option value="pricing">Bảng giá</option>
                    <option value="feedback">Góp ý, phản hồi</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Tin nhắn *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 bg-white"
                    placeholder="Nhập tin nhắn của bạn..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Gửi Tin Nhắn</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Gửi Thành Công!
                </h3>
                <p className="text-gray-600">
                  Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 24 giờ.
                </p>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Main Contact Info */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Thông Tin Liên Hệ
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-2xl">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Địa chỉ</div>
                    <div className="text-gray-600">
                      123 Nguyễn Huệ, Quận 1, TP.HCM<br />
                      (Gần ngã tư Nguyễn Huệ - Lê Lợi)
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-teal-50 rounded-2xl">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Điện thoại</div>
                    <div className="text-gray-600">
                      Hotline: +84 28 1234 5678<br />
                      Zalo: +84 901 234 567
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-2xl">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Email</div>
                    <div className="text-gray-600">
                      info@serenityspa.com<br />
                      booking@serenityspa.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-2xl">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Giờ mở cửa</div>
                    <div className="text-gray-600">
                      Thứ 2 - Thứ 7: 8:00 - 22:00<br />
                      Chủ Nhật: 9:00 - 21:00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Quick Contact */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Kết Nối Với Chúng Tôi</h3>
              
              <div className="grid grid-cols-1 gap-4">
                <a
                  href="tel:+842812345678"
                  className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Gọi ngay: +84 28 1234 5678</span>
                </a>
                
                <a
                  href="https://zalo.me/0901234567"
                  className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-colors duration-300"
                >
                  <Zap className="w-5 h-5" />
                  <span>Chat Zalo: 0901 234 567</span>
                </a>
                
                <a
                  href="https://m.me/serenityspa"
                  className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Messenger: Serenity Spa</span>
                </a>
                
                <a
                  href="https://facebook.com/serenityspa"
                  className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook: @SerenitySpa</span>
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-3xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Bản Đồ</h3>
              <div className="bg-emerald-100 rounded-2xl h-48 flex items-center justify-center">
                <div className="text-emerald-600">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">123 Nguyễn Huệ, Quận 1, TP.HCM</p>
                  <p className="text-xs mt-1">Click để xem bản đồ chi tiết</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;