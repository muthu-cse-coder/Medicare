// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './components/layout/Layout';
// import Home from './pages/Home';
// import Specializations from './pages/Specializations';
// import SpecializationDoctors from './pages/SpecializationDoctors';
// import DoctorDetailsPage from './pages/DoctorDetails';
// import Contact from './pages/Contact';
// import Chat from './pages/Chat';
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';


// import AdminLogin from './components/admin/AdminLogin';
// import AdminLayout from './components/admin/AdminLayout';
// import ProtectedAdminRoute from './components/admin/ProtectedAdminRoute';
// import AdminDashboard from './pages/AdminDashboard';

// import { AuthProvider } from './context/AuthContext';
// import { NotificationProvider } from './context/NotificationContext';
// import { AdminProvider } from './context/AdminContext';
// import DoctorManagement from './pages/DoctorManagement';
// import AppointmentManagement from './components/admin/AppointmentManagement';
// import PatientManagement from './pages/PatientManagement';

// import SpecializationManagement from './pages/SpecializationManagement';
// import Reports from './components/admin/Reports';
// import Settings from './pages/Settings';

// import ChatManagement from './pages/ChatManagement';

// import ProtectedRoute from './components/auth/ProtectedRoute';

// function App() {
//   return (
//     <AuthProvider>
//       <NotificationProvider>
//         <AdminProvider>
//           <BrowserRouter>
//             <Routes>
//               {/* User Routes */}
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/" element={<Layout />}>
//                 <Route index element={<Home />} />
//                 <Route path="specializations" element={<Specializations />} />
//                 <Route path="specializations/:id" element={<SpecializationDoctors />} />
//                 <Route path="doctor/:id" element={<DoctorDetailsPage />} />
//                 <Route path="contact" element={<Contact />} />
//                 <Route path="chat" element={<Chat />} />
//               </Route>

//               {/* Admin Routes */}
//               <Route path="/admin/login" element={<AdminLogin />} />
//               <Route path="/admin" element={
//                 <ProtectedAdminRoute>
//                   <AdminLayout />
//                 </ProtectedAdminRoute>
//               }>
//                 <Route path="dashboard" element={<AdminDashboard />} />
//                 <Route path="doctors" element={<DoctorManagement />} />
//                  <Route path="appointments" element={<AppointmentManagement />} />
//                    <Route path="patients" element={<PatientManagement />} />
//                    <Route path="specializations" element={<SpecializationManagement />} /> 
//                    <Route path="reports" element={<Reports />} />  
//                     <Route path="settings" element={<Settings />} /> 
//                     <Route path="chat" element={<ChatManagement />} />  
//               </Route>
//             </Routes>
//           </BrowserRouter>
//         </AdminProvider>
//       </NotificationProvider>
//     </AuthProvider>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Specializations from './pages/Specializations';
import SpecializationDoctors from './pages/SpecializationDoctors';
import DoctorDetailsPage from './pages/DoctorDetails';
import Contact from './pages/Contact';
import Chat from './pages/Chat';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// Protected Route
import ProtectedRoute from './components/auth/ProtectedRoute';

// Admin Imports
import AdminLogin from './components/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import ProtectedAdminRoute from './components/admin/ProtectedAdminRoute';
import AdminDashboard from './pages/AdminDashboard';
import DoctorManagement from './pages/DoctorManagement';
import AppointmentManagement from './components/admin/AppointmentManagement';
import PatientManagement from './pages/PatientManagement';
import SpecializationManagement from './pages/SpecializationManagement';
import Reports from './components/admin/Reports';
import ChatManagement from './pages/ChatManagement';
import Settings from './pages/Settings';

import { AuthProvider } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';
import { AdminProvider } from './context/AdminContext';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <AdminProvider>
          <BrowserRouter>
            <Routes>
              {/* Public Routes - Login without authentication */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Protected User Routes - Login தேவை */}
              <Route path="/" element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }>
                <Route index element={<Home />} />
                <Route path="specializations" element={<Specializations />} />
                <Route path="specializations/:id" element={<SpecializationDoctors />} />
                <Route path="doctor/:id" element={<DoctorDetailsPage />} />
                <Route path="contact" element={<Contact />} />
                <Route path="chat" element={<Chat />} />
              </Route>

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={
                <ProtectedAdminRoute>
                  <AdminLayout />
                </ProtectedAdminRoute>
              }>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="doctors" element={<DoctorManagement />} />
                <Route path="appointments" element={<AppointmentManagement />} />
                <Route path="patients" element={<PatientManagement />} />
                <Route path="specializations" element={<SpecializationManagement />} />
                <Route path="reports" element={<Reports />} />
                <Route path="chat" element={<ChatManagement />} />
                <Route path="settings" element={<Settings />} />
              </Route>

              {/* 404 - Catch all */}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </BrowserRouter>
        </AdminProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;