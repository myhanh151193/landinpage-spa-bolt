import React from 'react';
import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Eye,
  MessageSquare,
  Star,
  Clock,
  FileText
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Tổng Khách Hàng',
      value: '2,847',
      change: '+12%',
      changeType: 'increase',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Lịch Hẹn Hôm Nay',
      value: '24',
      change: '+3',
      changeType: 'increase',
      icon: <Calendar className="w-8 h-8" />,
      color: 'bg-emerald-500'
    },
    {
      title: 'Doanh Thu Tháng',
      value: '₫125M',
      change: '+8%',
      changeType: 'increase',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'bg-purple-500'
    },
    {
      title: 'Tỷ Lệ Hài Lòng',
      value: '98.5%',
      change: '+0.5%',
      changeType: 'increase',
      icon: <Star className="w-8 h-8" />,
      color: 'bg-yellow-500'
    }
  ];

  const recentBookings = [
    { id: 1, customer: 'Nguyễn Thị Lan', service: 'Chăm Sóc Da Mặt', time: '09:00', status: 'confirmed' },
    { id: 2, customer: 'Trần Văn Nam', service: 'Massage Thư Giãn', time: '10:30', status: 'pending' },
    { id: 3, customer: 'Lê Thị Hoa', service: 'Gói VIP Premium', time: '14:00', status: 'confirmed' },
    { id: 4, customer: 'Phạm Minh Tuấn', service: 'Tắm Khoáng Nóng', time: '16:00', status: 'completed' },
  ];

  const recentReviews = [
    { id: 1, customer: 'Chị Mai Anh', rating: 5, comment: 'Dịch vụ tuyệt vời, nhân viên rất chuyên nghiệp!' },
    { id: 2, customer: 'Chị Hương', rating: 5, comment: 'Không gian thư giãn, tôi sẽ quay lại.' },
    { id: 3, customer: 'Anh Đức', rating: 4, comment: 'Massage rất tốt, giá cả hợp lý.' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Cập nhật lần cuối: {new Date().toLocaleString('vi-VN')}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                <div className={`flex items-center mt-2 text-sm ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>{stat.change} so với tháng trước</span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-full text-white`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Lịch Hẹn Gần Đây</h2>
            <button className="text-emerald-600 hover:text-emerald-700 font-medium">
              Xem tất cả
            </button>
          </div>
          
          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{booking.customer}</p>
                    <p className="text-sm text-gray-600">{booking.service}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{booking.time}</span>
                  </div>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {booking.status === 'confirmed' ? 'Đã xác nhận' :
                     booking.status === 'pending' ? 'Chờ xác nhận' : 'Hoàn thành'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Đánh Giá Mới</h2>
            <button className="text-emerald-600 hover:text-emerald-700 font-medium">
              Xem tất cả
            </button>
          </div>
          
          <div className="space-y-4">
            {recentReviews.map((review) => (
              <div key={review.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-800">{review.customer}</p>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Thao Tác Nhanh</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors duration-200">
            <Calendar className="w-6 h-6 text-emerald-600" />
            <span className="font-medium text-emerald-700">Thêm Lịch Hẹn</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
            <FileText className="w-6 h-6 text-blue-600" />
            <span className="font-medium text-blue-700">Viết Bài Mới</span>
          </button>
          <a 
            href="/"
            className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200"
          >
            <Eye className="w-6 h-6 text-purple-600" />
            <span className="font-medium text-purple-700">Xem Website</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;