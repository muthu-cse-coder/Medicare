import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  UserCog, 
  Calendar, 
  Stethoscope, 
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
  Search,
  Bell
} from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';

const AdminLayout = () => {
  const { admin, logoutAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/login');
  };

  const navItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/doctors', icon: UserCog, label: 'Doctors' },
    { path: '/admin/patients', icon: Users, label: 'Patients' },
    { path: '/admin/appointments', icon: Calendar, label: 'Appointments' },
    { path: '/admin/specializations', icon: Stethoscope, label: 'Specializations' },
    { path: '/admin/reports', icon: BarChart3, label: 'Reports' },
    { path: '/admin/chat', icon: MessageSquare, label: 'Chat' },
    { path: '/admin/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <a href="/admin/dashboard" className="admin-logo">
            <div className="admin-logo-icon">M</div>
            <div>
              <div className="admin-logo-text">MediCare</div>
              <div className="admin-logo-subtitle">Admin Panel</div>
            </div>
          </a>
        </div>

        <nav className="admin-nav">
          <ul className="admin-nav-list">
            {navItems.map((item) => (
              <li key={item.path} className="admin-nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `admin-nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="admin-sidebar-footer">
          <button 
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              background: '#1e293b',
              border: 'none',
              color: '#94a3b8',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ef4444';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1e293b';
              e.currentTarget.style.color = '#94a3b8';
            }}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="admin-main">
        <header className="admin-header">
          <div className="admin-header-left">
            <h1>Welcome back, {admin?.name}!</h1>
          </div>
          
          <div className="admin-header-right">
            <div className="admin-search">
              <Search size={18} className="admin-search-icon" />
              <input 
                type="text" 
                className="admin-search-input" 
                placeholder="Search..." 
              />
            </div>

            <button className="notification-btn">
              <Bell size={20} color="#6b7280" />
              <span className="notification-badge">3</span>
            </button>

            <div className="user-info">
              <div className="message-avatar" style={{ background: '#1e293b' }}>
                {admin?.name?.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;