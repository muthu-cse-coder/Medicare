import { createContext, useState, useContext, useEffect } from 'react';
// import { adminUser } from '../services/adminMockData';
import { adminUser } from '../services/mockData';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if admin is logged in
    const savedAdmin = localStorage.getItem('admin');
    if (savedAdmin) {
      setAdmin(JSON.parse(savedAdmin));
    }
    setLoading(false);
  }, []);

  const loginAdmin = (email, password) => {
    // Mock admin login
    if (email === adminUser.email && password === adminUser.password) {
      const adminData = {
        id: adminUser.id,
        name: adminUser.name,
        email: adminUser.email,
        role: adminUser.role
      };
      
      setAdmin(adminData);
      localStorage.setItem('admin', JSON.stringify(adminData));
      return { success: true, admin: adminData };
    }
    
    return { success: false, error: 'Invalid credentials' };
  };

  const logoutAdmin = () => {
    setAdmin(null);
    localStorage.removeItem('admin');
  };

  return (
    <AdminContext.Provider value={{ admin, loginAdmin, logoutAdmin, loading }}>
      {children}
    </AdminContext.Provider>
  );
};