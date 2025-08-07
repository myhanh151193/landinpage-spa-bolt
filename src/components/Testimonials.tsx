import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Testimonials = () => {
  const { testimonials } = useAppContext();

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hàng ngàn khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 max-w-4xl mx-auto">
          <div className="text-center">
            <Quote className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
            <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed mb-8 italic">
              "{testimonials[0].content}"
            </p>
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[0].image}
                alt={testimonials[0].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-800 text-lg">
                  {testimonials[0].name}
                </div>
                <div className="text-gray-600">{testimonials[0].role}</div>
                <div className="flex space-x-1 mt-1">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(1).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 mb-2">4.9/5</div>
              <div className="text-gray-700 font-semibold mb-1">Đánh Giá Trung Bình</div>
              <div className="text-gray-600 text-sm">Trên Google Reviews</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-gray-700 font-semibold mb-1">Khách Hàng Quay Lại</div>
              <div className="text-gray-600 text-sm">Tỷ lệ khách hàng trung thành</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 mb-2">5000+</div>
              <div className="text-gray-700 font-semibold mb-1">Đánh Giá 5 Sao</div>
              <div className="text-gray-600 text-sm">Trên các nền tảng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;