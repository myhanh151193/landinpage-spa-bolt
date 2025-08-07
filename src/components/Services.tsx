import React from 'react';
import { Sparkles, Heart, Leaf, Crown, Droplets, Sun } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Services = () => {
  const { services } = useAppContext();

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Icon mapping for services
  const getServiceIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'chăm sóc da':
        return <Sparkles className="w-8 h-8" />;
      case 'massage':
        return <Heart className="w-8 h-8" />;
      case 'thảo dược':
        return <Leaf className="w-8 h-8" />;
      case 'vip':
        return <Crown className="w-8 h-8" />;
      case 'tiện ích':
        return <Droplets className="w-8 h-8" />;
      default:
        return <Sun className="w-8 h-8" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá bộ sưu tập đa dạng các dịch vụ spa cao cấp được thiết kế 
            để mang lại sự thư giãn tối đa và làm đẹp toàn diện
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 text-emerald-600">
                  {getServiceIcon(service.category)}
                </div>
                <div className="absolute bottom-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={scrollToBooking}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Đặt Lịch Ngay
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Không Tìm Thấy Dịch Vụ Phù Hợp?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Hãy liên hệ với chúng tôi để được tư vấn gói dịch vụ cá nhân hóa
            </p>
            <button 
              onClick={scrollToBooking}
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Tư Vấn Miễn Phí
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;