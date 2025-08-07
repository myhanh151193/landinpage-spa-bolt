import React, { useState } from 'react';
import { Plus, Trash2, Upload, Eye, X } from 'lucide-react';
import { useAppContext, GalleryImage } from '../../context/AppContext';

const GalleryManager = () => {
  const { galleryImages, setGalleryImages } = useAppContext();

  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [newImage, setNewImage] = useState({
    src: '',
    alt: '',
    category: ''
  });

  const categories = ["Không gian", "Dịch vụ", "Tiện ích", "Sản phẩm"];
  const [filterCategory, setFilterCategory] = useState("Tất cả");

  const filteredImages = filterCategory === "Tất cả" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filterCategory);

  const handleAddImage = () => {
    if (newImage.src && newImage.alt && newImage.category) {
      const image: GalleryImage = {
        id: Date.now(),
        src: newImage.src,
        alt: newImage.alt,
        category: newImage.category,
        uploadDate: new Date().toISOString().split('T')[0]
      };
      setGalleryImages([...galleryImages, image]);
      setNewImage({ src: '', alt: '', category: '' });
      setShowAddForm(false);
    }
  };

  const handleDeleteImage = (id: number) => {
    if (confirm('Bạn có chắc chắn muốn xóa hình ảnh này?')) {
      setGalleryImages(galleryImages.filter(img => img.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Quản Lý Hình Ảnh</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Thêm Hình Ảnh</span>
        </button>
      </div>

      {/* Filter */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 font-medium">Lọc theo danh mục:</span>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
        >
          <option value="Tất cả">Tất cả</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Add Image Form */}
      {showAddForm && (
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Thêm Hình Ảnh Mới</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">URL Hình Ảnh</label>
              <input
                type="url"
                value={newImage.src}
                onChange={(e) => setNewImage({...newImage, src: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Danh Mục</label>
              <select
                value={newImage.category}
                onChange={(e) => setNewImage({...newImage, category: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Chọn danh mục</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Mô Tả</label>
              <input
                type="text"
                value={newImage.alt}
                onChange={(e) => setNewImage({...newImage, alt: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="Mô tả hình ảnh"
              />
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <button
              onClick={handleAddImage}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Upload className="w-4 h-4" />
              <span>Thêm Hình Ảnh</span>
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

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
            <div className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                <button
                  onClick={() => setSelectedImage(image)}
                  className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                >
                  <Eye className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDeleteImage(image.id)}
                  className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                  {image.category}
                </span>
                <span className="text-xs text-gray-500">{image.uploadDate}</span>
              </div>
              <p className="text-sm text-gray-700">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm text-white p-4 rounded-lg">
              <div className="font-semibold mb-1">{selectedImage.category}</div>
              <div className="text-sm opacity-90">{selectedImage.alt}</div>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="text-2xl font-bold text-gray-800 mb-1">{galleryImages.length}</div>
          <div className="text-gray-600">Tổng Hình Ảnh</div>
        </div>
        {categories.map(category => (
          <div key={category} className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-emerald-600 mb-1">
              {galleryImages.filter(img => img.category === category).length}
            </div>
            <div className="text-gray-600">{category}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryManager;