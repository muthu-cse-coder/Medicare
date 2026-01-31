import { CheckCircle ,Info , X } from "lucide-react";
import { useNotification } from "../context/NotificationContext";
import { useEffect ,useRef } from "react";



const NotificationPanel = ({ onClose }) => {
  const { notifications, markAsRead, markAllAsRead } = useNotification();
  const panelRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} />;
      case 'info':
        return <Info size={20} />;
      default:
        return <Info size={20} />;
    }
  };

  return (
    <div className="notification-panel" ref={panelRef}>
      <div className="notification-header">
        <h3 className="notification-title">Notifications</h3>
        {notifications.some(n => !n.read) && (
          <button onClick={markAllAsRead} className="mark-all-read">
            Mark all read
          </button>
        )}
      </div>

      <div className="notification-list">
        {notifications.length === 0 ? (
          <div className="notification-empty">
            <p>No notifications</p>
          </div>
        ) : (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className={`notification-item ${!notif.read ? 'unread' : ''}`}
              onClick={() => markAsRead(notif.id)}
            >
              <div className="notification-content">
                <div className={`notification-icon ${notif.type}`}>
                  {getIcon(notif.type)}
                </div>
                <div className="notification-text">
                  <div className="notification-item-title">{notif.title}</div>
                  <div className="notification-item-message">{notif.message}</div>
                  <div className="notification-time">{notif.time}</div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationPanel;