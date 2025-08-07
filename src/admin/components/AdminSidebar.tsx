import React from 'react';
import { 
  LayoutDashboard, 
  Sparkles, 
  FileText, 
  Calendar, 
  Image, 
  MessageSquare, 
  Settings,
  ChevronRight
} from 'lucide-react';

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sidebarOpen: boolean;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ 
  activeTab, 
  setActiveTab, 
  sidebarOpen 
}) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'services', label: 'Dịch Vụ', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'blog', label: 'Bài Viết', icon: <FileText className="w-5 h-5" /> },
    { id: 'bookings', label: 'Đặt Lịch', icon: <Calendar className="w-5 h-5" /> },
    { id: 'gallery', label: 'Hình Ảnh', icon: <Image className="w-5 h-5" /> },
    { id: 'testimonials', label: 'Đánh Giá', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'settings', label: 'Cài Đặt', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <aside className={`fixed left-0 top-16 h-full bg-white shadow-lg transition-all duration-300 z-40 ${
      sidebarOpen ? 'w-64' : 'w-16'
    }`}>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className={`${activeTab === item.id ? 'text-white' : 'text-gray-500'}`}>
                  {item.icon}
                </span>
                {sidebarOpen && (
                  <>
                    <span className="font-medium">{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ml-auto ${
                      activeTab === item.id ? 'text-white' : 'text-gray-400'
                    }`} />
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;