import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { useAppContext, Service } from '../../context/AppContext';

const ServicesManager = () => {
  const { services, setServices } = useAppContext();

  const [editingService, setEditingService] = useState<Service | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newService, setNewService] = useState<Partial<Service>>({
    title: '',
    description: '',
    price: '',
    image: '',
    features: [],
    category: ''
  });

  const handleEdit = (service: Service) => {
    setEditingService({ ...service });
  };

  const handleSave = () => {
    if (editingService) {
      setServices(services.map(s => s.id === editingService.id ? editingService : s));
      setEditingService(null);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm('Bạn có chắc chắn muốn xóa dịch vụ này?')) {
      setServices(services.filter(s => s.id !== id));
    }
  };

  const handleAddService = () => {
    if (newService.title && newService.description) {
      const service: Service = {
        id: Date.now(),
        title: newService.title || '',
        description: newService.description || '',
        price: newService.price || '',
        image: newService.image || '',
        features: newService.features || [],
        category: newService.category || ''
      };
      setServices([...services, service]);
      setNewService({
        title: '',
        description: '',
        price: '',
        image: '',
        features: [],
        category: ''
      });
      setShowAddForm(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Quản Lý Dịch Vụ</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Thêm Dịch Vụ</span>
        </button>
      </div>

      {/* Add Service Form */}
      {showAddForm && (
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Thêm Dịch Vụ Mới</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Tên Dịch Vụ</label>
              <input
                type="text"
                value={newService.title}
                onChange={(e) => setNewService({...newService, title: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="Nhập tên dịch vụ"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Giá</label>
              <input
                type="text"
                value={newService.price}
                onChange={(e) => setNewService({...newService, price: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="Từ 800,000đ"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Mô Tả</label>
              <textarea
                value={newService.description}
                onChange={(e) => setNewService({...newService, description: e.target.value})}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="Mô tả dịch vụ"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">URL Hình Ảnh</label>
              <input
                type="url"
                value={newService.image}
                onChange={(e) => setNewService({...newService, image: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Danh Mục</label>
              <select
                value={newService.category}
                onChange={(e) => setNewService({...newService, category: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Chọn danh mục</option>
                <option value="Chăm sóc da">Chăm sóc da</option>
                <option value="Massage">Massage</option>
                <option value="Thảo dược">Thảo dược</option>
                <option value="VIP">VIP</option>
              </select>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <button
              onClick={handleAddService}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>Lưu</span>
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center space-x-2"
            >
              <X className="w-4 h-4" />
              <span>Hủy</span>
            </button>
          </div>
        </div>
      )}

      {/* Services List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {editingService?.id === service.id ? (
              <div className="p-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editingService.title}
                    onChange={(e) => setEditingService({...editingService, title: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                  <textarea
                    value={editingService.description}
                    onChange={(e) => setEditingService({...editingService, description: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                  <input
                    type="text"
                    value={editingService.price}
                    onChange={(e) => setEditingService({...editingService, price: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={handleSave}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center space-x-1"
                  >
                    <Save className="w-4 h-4" />
                    <span>Lưu</span>
                  </button>
                  <button
                    onClick={() => setEditingService(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center space-x-1"
                  >
                    <X className="w-4 h-4" />
                    <span>Hủy</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-2">{service.description}</p>
                      <p className="text-emerald-600 font-semibold">{service.price}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(service)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center space-x-1"
                    >
                      <Edit className="w-4 h-4" />
                      <span>Sửa</span>
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center space-x-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Xóa</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesManager;