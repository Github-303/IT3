import React, { createContext, useContext, useState } from 'react';
// Tạo AuthContext để quản lý trạng thái đăng nhập
const AuthContext = createContext();

// AuthProvider component để bọc ứng dụng và cung cấp ngữ cảnh cho toàn bộ app
const AuthProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null); // Thêm trạng thái lưu mật khẩu

  const login = (phone, pass) => {
    setPhoneNumber(phone);  // Lưu số điện thoại sau khi đăng nhập
    setPassword(pass);  // Lưu mật khẩu
  };

   const logout = () => {
    setPhoneNumber(null);  // Xóa dữ liệu người dùng sau khi đăng xuất
    setPassword(null); // Xóa mật khẩu sau khi đăng xuất
  };

  return (
    <AuthContext.Provider value={{ phoneNumber, password, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook để sử dụng AuthContext
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth phải được sử dụng trong AuthProvider');
  }
  return context;
};

// Export both AuthProvider and useAuth
export { AuthProvider, useAuth };