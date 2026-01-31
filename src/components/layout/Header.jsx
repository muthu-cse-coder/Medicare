import { Bell, User, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useNotification } from '../../context/NotificationContext';
import { useState } from 'react';
import NotificationPanel from '../../notifications/NotificationPanel';

const Header = () => {
  const { user, logout } = useAuth();
  const { unreadCount } = useNotification();
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-section">
          <div className="logo-icon">M</div>
          <h1 className="logo-text">MediCare</h1>
        </div>

        <div className="header-actions">
          {user ? (
            <>
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="notification-btn"
                >
                  <Bell size={24} color="#4b5563" />
                  {unreadCount > 0 && (
                    <span className="notification-badge">{unreadCount}</span>
                  )}
                </button>
                {showNotifications && (
                  <NotificationPanel onClose={() => setShowNotifications(false)} />
                )}
              </div>

              <div className="user-info">
                <User size={24} />
                <span>{user.name}</span>
              </div>

              <button onClick={logout} className="logout-btn">
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <a href="/login" className="login-btn">Login</a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;