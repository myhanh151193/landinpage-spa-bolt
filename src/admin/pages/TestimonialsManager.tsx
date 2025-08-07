import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Star } from 'lucide-react';
import { useAppContext, Testimonial } from '../../context/AppContext';

const TestimonialsManager = () => {
  const { testimonials, setTestimonials } = useAppContext();

  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState<Partial<Testimonial>>({
    name: '',
    role: '',
    image: '',
    content: '',
    rating: 5,
    featured: false
  });

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial({ ...testimonial });
  };

  const handleSave = () => {
    if (editingTestimonial) {
      setTestimonials(testimonials.map(t => 
        t.id === editingTestimonial.id ? editingTestimonial : t
      ));
      setEditingTestimonial(null);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm('Bạn có chắc chắn muốn xóa đánh giá này?')) {
      setTestimonials(testimonials.filter(t => t.id !== id));
    }
  };

  const handleAddTestimonial = () => {
    if (newTestimonial.name && newTestimonial.content) {
      const testimonial: Testimonial = {
        id: Date.now(),
        name: newTestimonial.name || '',
        role: newTestimonial.role || '',
        image: newTestimonial.image || '',
        content: newTestimonial.content || '',
        rating: newTestimonial.rating || 5,
        featured: newTestimonial.featured || false,
      };
      setTestimonials([...testimonials, testimonial]);
      setNewTestimonial({
        name: '',
        role: '',
        image: '',
        content: '',
        rating: 5,
        featured: false
      });
      setShowAddForm(false);
    }
  };

  const toggleFeatured = (id: number) => {
    setTestimonials(testimonials.map(t => 
      t.id === id ? { ...t, featured: !t.featured } : t
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Quản Lý Đánh Giá</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Thêm Đánh Giá</span>
        </button>
      </div>

      {/* Add Testimonial Form */}
      {showAddForm && (
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Thêm Đánh Giá Mới</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Tên Khách Hàng</label>
              <input
                type="text"
                value={newTestimonial.name}
                onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="Nhập tên khách hàng"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Nghề Nghiệp</label>
              <input
                type="text"
                value={newTestimonial.role}
                onChange={(e) => setNewTestimonial({...newTestimonial, role: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="Nghề nghiệp"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">URL Hình Ảnh</label>
              <input
                type="url"
                value={newTestimonial.image}
                onChange={(e) => setNewTestimonial({...newTestimonial, image: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Đánh Giá</label>
              <select
                value={newTestimonial.rating}
                onChange={(e) => setNewTestimonial({...newTestimonial, rating: parseInt(e.target.value)})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              >
                <option value={5}>5 sao</option>
                <option value={4}>4 sao</option>
                <option value={3}>3 sao</option>
                <option value={2}>2 sao</option>
                <option value={1}>1 sao</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Nội Dung Đánh Giá</label>
              <textarea
                value={newTestimonial.content}
                onChange={(e) => setNewTestimonial({...newTestimonial, content: e.target.value})}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="Nội dung đánh giá của khách hàng"
              />
            </div>
            <div className="md:col-span-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={newTestimonial.featured}
                  onChange={(e) => setNewTestimonial({...newTestimonial, featured: e.target.checked})}
                  className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-gray-700 font-semibold">Đánh giá nổi bật</span>
              </label>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <button
              onClick={handleAddTestimonial}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>Lưu Đánh Giá</span>
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

      {/* Testimonials List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`bg-white rounded-2xl shadow-lg p-6 ${
              testimonial.featured ? 'ring-2 ring-yellow-400' : ''
            }`}
          >
            {editingTestimonial?.id === testimonial.id ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={editingTestimonial.name}
                  onChange={(e) => setEditingTestimonial({...editingTestimonial, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="text"
                  value={editingTestimonial.role}
                  onChange={(e) => setEditingTestimonial({...editingTestimonial, role: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
                <textarea
                  value={editingTestimonial.content}
                  onChange={(e) => setEditingTestimonial({...editingTestimonial, content: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
                <select
                  value={editingTestimonial.rating}
                  onChange={(e) => setEditingTestimonial({...editingTestimonial, rating: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                >
                  <option value={5}>5 sao</option>
                  <option value={4}>4 sao</option>
                  <option value={3}>3 sao</option>
                  <option value={2}>2 sao</option>
                  <option value={1}>1 sao</option>
                </select>
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center space-x-1"
                  >
                    <Save className="w-4 h-4" />
                    <span>Lưu</span>
                  </button>
                  <button
                    onClick={() => setEditingTestimonial(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center space-x-1"
                  >
                    <X className="w-4 h-4" />
                    <span>Hủy</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                {testimonial.featured && (
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block">
                    Đánh giá nổi bật
                  </div>
                )}
                
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => toggleFeatured(testimonial.id)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                        testimonial.featured
                          ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {testimonial.featured ? 'Bỏ nổi bật' : 'Nổi bật'}
                    </button>
                    <button
                      onClick={() => handleEdit(testimonial)}
                      className="text-blue-600 hover:text-blue-800 p-1"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial.id)}
                      className="text-red-600 hover:text-red-800 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="text-2xl font-bold text-gray-800 mb-1">{testimonials.length}</div>
          <div className="text-gray-600">Tổng Đánh Giá</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="text-2xl font-bold text-yellow-600 mb-1">
            {testimonials.filter(t => t.featured).length}
          </div>
          <div className="text-gray-600">Đánh Giá Nổi Bật</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="text-2xl font-bold text-emerald-600 mb-1">
            {(testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)}
          </div>
          <div className="text-gray-600">Đánh Giá Trung Bình</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsManager;