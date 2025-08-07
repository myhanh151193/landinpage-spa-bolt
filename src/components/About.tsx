import React from 'react';
import { Users, Trophy, Smile, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "50+", label: "Chuyên Gia" },
    { icon: <Trophy className="w-8 h-8" />, number: "15+", label: "Giải Thưởng" },
    { icon: <Smile className="w-8 h-8" />, number: "10K+", label: "Khách Hàng" },
    { icon: <Shield className="w-8 h-8" />, number: "100%", label: "An Toàn" }
  ];

  const team = [
    {
      name: "Ms. Linh Nguyễn",
      role: "Giám Đốc & Founder",
      image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "15 năm kinh nghiệm trong ngành spa & wellness"
    },
    {
      name: "Ms. Mai Trần",
      role: "Chuyên Gia Chăm Sóc Da",
      image: "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "Chứng chỉ quốc tế về dermatology & skincare"
    },
    {
      name: "Ms. Hương Võ",
      role: "Master Therapist",
      image: "https://images.pexels.com/photos/5069408/pexels-photo-5069408.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "Chuyên gia massage & liệu pháp thư giãn"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Về Serenity Spa
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Được thành lập từ năm 2009, Serenity Spa đã trở thành một trong những 
              thương hiệu spa hàng đầu tại Việt Nam. Chúng tôi tự hào mang đến cho 
              khách hàng những trải nghiệm thư giãn và làm đẹp đẳng cấp quốc tế.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Với đội ngũ chuyên gia giàu kinh nghiệm, không gian sang trọng và 
              công nghệ hiện đại, chúng tôi cam kết mang lại sự hài lòng tuyệt đối 
              cho mỗi khách hàng.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
                <div className="text-gray-700">Năm Kinh Nghiệm</div>
              </div>
              <div className="text-center p-4 bg-teal-50 rounded-lg">
                <div className="text-3xl font-bold text-teal-600 mb-2">5⭐</div>
                <div className="text-gray-700">Đánh Giá Trung Bình</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                alt="Spa treatment"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/7755257/pexels-photo-7755257.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Spa interior"
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold text-emerald-600">100%</div>
              <div className="text-gray-700 text-sm">Khách Hàng<br />Hài Lòng</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-emerald-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Đội Ngũ Chuyên Gia
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Các chuyên gia hàng đầu với nhiều năm kinh nghiệm và chứng chỉ quốc tế
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {member.name}
              </h4>
              <div className="text-emerald-600 font-semibold mb-3">
                {member.role}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center bg-gray-50 rounded-3xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Sứ Mệnh Của Chúng Tôi
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            "Mang đến cho mỗi khách hàng những giây phút thư giãn tuyệt vời nhất, 
            giúp họ tái tạo năng lượng và tìm lại sự cân bằng trong cuộc sống. 
            Chúng tôi không chỉ chăm sóc vẻ đẹp bên ngoài mà còn nuôi dưỡng 
            sức khỏe tinh thần và thể chất toàn diện."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;