import React, { useState } from 'react';
import AdminHeader from './components/AdminHeader';
import AdminSidebar from './components/AdminSidebar';
import Dashboard from './pages/Dashboard';
import ServicesManager from './pages/ServicesManager';
import BlogManager from './pages/BlogManager';
import BookingsManager from './pages/BookingsManager';
import GalleryManager from './pages/GalleryManager';
import TestimonialsManager from './pages/TestimonialsManager';
import SettingsManager from './pages/SettingsManager';

const AdminApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'services':
        return <ServicesManager />;
      case 'blog':
        return <BlogManager />;
      case 'bookings':
        return <BookingsManager />;
      case 'gallery':
        return <GalleryManager />;
      case 'testimonials':
        return <TestimonialsManager />;
      case 'settings':
        return <SettingsManager />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <div className="flex">
        <AdminSidebar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sidebarOpen={sidebarOpen}
        />
        
        <main className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-16'
        } pt-16`}>
          <div className="p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminApp;