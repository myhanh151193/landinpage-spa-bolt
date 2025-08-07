import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Check, X, Eye } from 'lucide-react';

interface Booking {
  id: number;
  customerName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes: string;
  createdAt: string;
}

const BookingsManager = () => {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      customerName: 'Nguyễn Thị Lan',
      phone: '0901234567',
      email: 'lan@email.com',
      service: 'Chăm Sóc Da Mặt',
      date: '2025-01-20',
      time: '09:00',
      status: 'pending',
      notes: 'Khách hàng có da nhạy cảm',
      createdAt: '2025-01-15 14:30'
    },
    {
      id: 2,
      customerName: 'Trần Văn Nam',
      phone: '0912345678',
      email: 'nam@email.com',
      service: 'Massage Thư Giãn',
      date: '2025-01-20',
      time: '10:30',
      status: 'confirmed',
      notes: '',
      createdAt: '2025-01-15 15:45'
    },
    {
      id: 3,
      customerName: 'Lê Thị Hoa',
      phone: '0923456789',
      email: 'hoa@email.com',
      service: 'Gói VIP Premium',
      date: '2025-01-21',
      time: '14:00',
      status: 'completed',
      notes: 'Khách VIP, cần phục vụ đặc biệt',
      createdAt: '2025-01-14 10:20'
    }
  ]);

  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const updateBookingStatus = (id: number, status: Booking['status']) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    ));
  };

  const filteredBookings = filterStatus === 'all' 
    ? bookings 
    : bookings.filter(booking => booking.status === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Chờ xác nhận';
      case 'confirmed': return 'Đã xác nhận';
      case 'completed': return 'Hoàn thành';
      case 'cancelled': return 'Đã hủy';
      default: return status;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Quản Lý Đặt Lịch</h1>
        <div className="flex items-center space-x-4">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
          >
            <option value="all">Tất cả</option>
            <option value="pending">Chờ xác nhận</option>
            <option value="confirmed">Đã xác nhận</option>
            <option value="completed">Hoàn thành</option>
            <option value="cancelled">Đã hủy</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Chờ xác nhận</p>
              <p className="text-2xl font-bold text-yellow-600">
                {bookings.filter(b => b.status === 'pending').length}
              </p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Đã xác nhận</p>
              <p className="text-2xl font-bold text-blue-600">
                {bookings.filter(b => b.status === 'confirmed').length}
              </p>
            </div>
            <Check className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Hoàn thành</p>
              <p className="text-2xl font-bold text-green-600">
                {bookings.filter(b => b.status === 'completed').length}
              </p>
            </div>
            <Calendar className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Tổng cộng</p>
              <p className="text-2xl font-bold text-gray-800">{bookings.length}</p>
            </div>
            <User className="w-8 h-8 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Khách Hàng</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Dịch Vụ</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Ngày & Giờ</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Trạng Thái</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Đặt Lúc</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Thao Tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-800">{booking.customerName}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Phone className="w-3 h-3" />
                        <span>{booking.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Mail className="w-3 h-3" />
                        <span>{booking.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                      {booking.service}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span>{booking.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{booking.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {getStatusText(booking.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {booking.createdAt}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      {booking.status === 'pending' && (
                        <>
                          <button
                            onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                            className="text-green-600 hover:text-green-800 p-1"
                            title="Xác nhận"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                            className="text-red-600 hover:text-red-800 p-1"
                            title="Hủy"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      {booking.status === 'confirmed' && (
                        <button
                          onClick={() => updateBookingStatus(booking.id, 'completed')}
                          className="text-blue-600 hover:text-blue-800 p-1"
                          title="Hoàn thành"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => setSelectedBooking(booking)}
                        className="text-gray-600 hover:text-gray-800 p-1"
                        title="Xem chi tiết"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Detail Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Chi Tiết Đặt Lịch</h2>
              <button
                onClick={() => setSelectedBooking(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-600">Khách Hàng</label>
                <p className="text-gray-800">{selectedBooking.customerName}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-600">Điện Thoại</label>
                  <p className="text-gray-800">{selectedBooking.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Email</label>
                  <p className="text-gray-800">{selectedBooking.email}</p>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-semibold text-gray-600">Dịch Vụ</label>
                <p className="text-gray-800">{selectedBooking.service}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-600">Ngày</label>
                  <p className="text-gray-800">{selectedBooking.date}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Giờ</label>
                  <p className="text-gray-800">{selectedBooking.time}</p>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-semibold text-gray-600">Trạng Thái</label>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedBooking.status)}`}>
                  {getStatusText(selectedBooking.status)}
                </span>
              </div>
              
              {selectedBooking.notes && (
                <div>
                  <label className="text-sm font-semibold text-gray-600">Ghi Chú</label>
                  <p className="text-gray-800">{selectedBooking.notes}</p>
                </div>
              )}
              
              <div>
                <label className="text-sm font-semibold text-gray-600">Đặt Lúc</label>
                <p className="text-gray-800">{selectedBooking.createdAt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingsManager;