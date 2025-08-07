import React, { useState } from 'react';
import AdminLogin from './admin/AdminLogin';
import AdminApp from './admin/AdminApp';

const AdminMain = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <AdminApp />
      )}
    </>
  );
};

export default AdminMain;