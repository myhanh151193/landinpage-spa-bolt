import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Eye } from 'lucide-react';
import { useAppContext, BlogPost } from '../../context/AppContext';

const BlogManager = () => {
  const { blogPosts, setBlogPosts } = useAppContext();

  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    image: '',
    status: 'draft'
  });

  const categories = [
    "Chăm Sóc Da",
    "Massage & Thư Giãn", 
    "Thảo Dược",
    "Tư Vấn",
    "Xu Hướng",
    "Detox & Wellness"
  ];

  const handleEdit = (post: BlogPost) => {
    setEditingPost({ ...post });
  };

  const handleSave = () => {
    if (editingPost) {
      setBlogPosts(blogPosts.map(p => p.id === editingPost.id ? editingPost : p));
      setEditingPost(null);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
      setBlogPosts(blogPosts.filter(p => p.id !== id));
    }
  };

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      const post: BlogPost = {
        id: Date.now(),
        title: newPost.title || '',
        excerpt: newPost.excerpt || '',
        content: newPost.content || '',
        author: newPost.author || 'Admin',
        date: new Date().toLocaleDateString('vi-VN'),
        category: newPost.category || '',
        image: newPost.image || '',
        status: newPost.status as 'published' | 'draft' || 'draft',
        views: '0'
      };
      setBlogPosts([...blogPosts, post]);
      setNewPost({
        title: '',
        excerpt: '',
        content: '',
        author: '',
        category: '',
        image: '',
        status: 'draft'
      });
      setShowAddForm(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Quản Lý Bài Viết</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Viết Bài Mới</span>
        </button>
      </div>

      {/* Add Post Form */}
      {showAddForm && (
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Viết Bài Mới</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Tiêu Đề</label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  placeholder="Nhập tiêu đề bài viết"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Danh Mục</label>
                <select
                  value={newPost.category}
                  onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Chọn danh mục</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Tóm Tắt</label>
              <textarea
                value={newPost.excerpt}
                onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="Tóm tắt ngắn gọn về bài viết"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Nội Dung</label>
              <textarea
                value={newPost.content}
                onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                placeholder="Nội dung chi tiết của bài viết"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Tác Giả</label>
                <input
                  type="text"
                  value={newPost.author}
                  onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  placeholder="Tên tác giả"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">URL Hình Ảnh</label>
                <input
                  type="url"
                  value={newPost.image}
                  onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                  placeholder="https://..."
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Trạng Thái</label>
              <select
                value={newPost.status}
                onChange={(e) => setNewPost({...newPost, status: e.target.value as 'published' | 'draft'})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              >
                <option value="draft">Bản nháp</option>
                <option value="published">Xuất bản</option>
              </select>
            </div>
          </div>
          
          <div className="flex space-x-4 mt-6">
            <button
              onClick={handleAddPost}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>Lưu Bài Viết</span>
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

      {/* Posts List */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Bài Viết</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Danh Mục</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Tác Giả</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Ngày</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Trạng Thái</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Lượt Xem</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Thao Tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {blogPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">{post.title}</p>
                        <p className="text-sm text-gray-600">{post.excerpt.substring(0, 50)}...</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{post.author}</td>
                  <td className="px-6 py-4 text-gray-700">{post.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.status === 'published' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {post.status === 'published' ? 'Đã xuất bản' : 'Bản nháp'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{post.views}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="text-blue-600 hover:text-blue-800 p-1"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-emerald-600 hover:text-emerald-800 p-1">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-red-600 hover:text-red-800 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogManager;