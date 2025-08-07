import React, { useState } from 'react';
import { Save, Globe, Phone, Mail, MapPin, Clock, Facebook, Zap, MessageCircle } from 'lucide-react';

const SettingsManager = () => {
  const [settings, setSettings] = useState({
    // Site Information
    siteName: 'Serenity Spa',
    siteDescription: 'Thiên đường thư giãn và làm đẹp hàng đầu tại Việt Nam',
    siteKeywords: 'spa, massage, chăm sóc da, làm đẹp, thư giãn, wellness',
    
    // Contact Information
    phone: '+84 28 1234 5678',
    mobile: '+84 901 234 567',
    email: 'info@serenityspa.com',
    bookingEmail: 'booking@serenityspa.com',
    address: '123 Nguyễn Huệ, Quận 1, TP.HCM',
    
    // Business Hours
    mondayToSaturday: '8:00 - 22:00',
    sunday: '9:00 - 21:00',
    
    // Social Media
    facebook: 'https://facebook.com/serenityspa',
    zalo: 'https://zalo.me/0901234567',
    messenger: 'https://m.me/serenityspa',
    
    // SEO Settings
    metaTitle: 'Serenity Spa - Thiên Đường Thư Giãn & Làm Đẹp',
    metaDescription: 'Trung tâm spa và làm đẹp hàng đầu với dịch vụ massage, chăm sóc da, và liệu pháp thư giãn chuyên nghiệp. Đặt lịch ngay hôm nay!',
    ogImage: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
    
    // Booking Settings
    bookingEnabled: true,
    onlinePayment: false,
    autoConfirm: false,
    
    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true
  });

  const [activeTab, setActiveTab] = useState('general');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Here you would typically save to a backend
    console.log('Settings saved:', settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const tabs = [
    { id: 'general', label: 'Thông Tin Chung', icon: <Globe className="w-4 h-4" /> },
    { id: 'contact', label: 'Liên Hệ', icon: <Phone className="w-4 h-4" /> },
    { id: 'seo', label: 'SEO', icon: <Globe className="w-4 h-4" /> },
    { id: 'booking', label: 'Đặt Lịch', icon: <Clock className="w-4 h-4" /> },
    { id: 'notifications', label: 'Thông Báo', icon: <Mail className="w-4 h-4" /> }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Cài Đặt Website</h1>
        <button
          onClick={handleSave}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
            saved 
              ? 'bg-green-600 text-white' 
              : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white'
          }`}
        >
          <Save className="w-5 h-5" />
          <span>{saved ? 'Đã Lưu!' : 'Lưu Cài Đặt'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Tabs */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Thông Tin Chung</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Tên Website</label>
                    <input
                      type="text"
                      value={settings.siteName}
                      onChange={(e) => handleInputChange('siteName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Từ Khóa</label>
                    <input
                      type="text"
                      value={settings.siteKeywords}
                      onChange={(e) => handleInputChange('siteKeywords', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Mô Tả Website</label>
                  <textarea
                    value={settings.siteDescription}
                    onChange={(e) => handleInputChange('siteDescription', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Thông Tin Liên Hệ</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Điện Thoại
                    </label>
                    <input
                      type="text"
                      value={settings.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Di Động
                    </label>
                    <input
                      type="text"
                      value={settings.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Chính
                    </label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Đặt Lịch
                    </label>
                    <input
                      type="email"
                      value={settings.bookingEmail}
                      onChange={(e) => handleInputChange('bookingEmail', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Địa Chỉ
                  </label>
                  <input
                    type="text"
                    value={settings.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Thứ 2 - Thứ 7
                    </label>
                    <input
                      type="text"
                      value={settings.mondayToSaturday}
                      onChange={(e) => handleInputChange('mondayToSaturday', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Chủ Nhật
                    </label>
                    <input
                      type="text"
                      value={settings.sunday}
                      onChange={(e) => handleInputChange('sunday', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Facebook className="w-4 h-4 inline mr-2" />
                      Facebook
                    </label>
                    <input
                      type="url"
                      value={settings.facebook}
                      onChange={(e) => handleInputChange('facebook', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Zap className="w-4 h-4 inline mr-2" />
                      Zalo
                    </label>
                    <input
                      type="url"
                      value={settings.zalo}
                      onChange={(e) => handleInputChange('zalo', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <MessageCircle className="w-4 h-4 inline mr-2" />
                      Messenger
                    </label>
                    <input
                      type="url"
                      value={settings.messenger}
                      onChange={(e) => handleInputChange('messenger', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'seo' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Cài Đặt SEO</h2>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Meta Title</label>
                  <input
                    type="text"
                    value={settings.metaTitle}
                    onChange={(e) => handleInputChange('metaTitle', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Meta Description</label>
                  <textarea
                    value={settings.metaDescription}
                    onChange={(e) => handleInputChange('metaDescription', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Open Graph Image URL</label>
                  <input
                    type="url"
                    value={settings.ogImage}
                    onChange={(e) => handleInputChange('ogImage', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            )}

            {activeTab === 'booking' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Cài Đặt Đặt Lịch</h2>
                
                <div className="space-y-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={settings.bookingEnabled}
                      onChange={(e) => handleInputChange('bookingEnabled', e.target.checked)}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-gray-700 font-semibold">Cho phép đặt lịch online</span>
                  </label>
                  
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={settings.onlinePayment}
                      onChange={(e) => handleInputChange('onlinePayment', e.target.checked)}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-gray-700 font-semibold">Thanh toán online</span>
                  </label>
                  
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={settings.autoConfirm}
                      onChange={(e) => handleInputChange('autoConfirm', e.target.checked)}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-gray-700 font-semibold">Tự động xác nhận lịch hẹn</span>
                  </label>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Cài Đặt Thông Báo</h2>
                
                <div className="space-y-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={settings.emailNotifications}
                      onChange={(e) => handleInputChange('emailNotifications', e.target.checked)}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-gray-700 font-semibold">Thông báo qua Email</span>
                  </label>
                  
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={settings.smsNotifications}
                      onChange={(e) => handleInputChange('smsNotifications', e.target.checked)}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-gray-700 font-semibold">Thông báo qua SMS</span>
                  </label>
                  
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={settings.pushNotifications}
                      onChange={(e) => handleInputChange('pushNotifications', e.target.checked)}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-gray-700 font-semibold">Push Notifications</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsManager;