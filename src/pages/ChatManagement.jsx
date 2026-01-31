import { useState } from 'react';
import { Search, Eye, Trash2, Ban, CheckCircle, AlertTriangle } from 'lucide-react';

const ChatManagement = () => {
  const [chatRooms] = useState([
    {
      id: 1,
      name: 'General Health',
      description: 'General health discussions',
      members: 234,
      messages: 1847,
      lastActivity: '2 minutes ago',
      status: 'active',
      moderators: ['Admin', 'Dr. Rajesh']
    },
    {
      id: 2,
      name: 'Cardiology',
      description: 'Heart health discussions',
      members: 89,
      messages: 542,
      lastActivity: '15 minutes ago',
      status: 'active',
      moderators: ['Admin', 'Dr. Priya']
    },
    {
      id: 3,
      name: 'Pediatrics',
      description: 'Child health discussions',
      members: 156,
      messages: 923,
      lastActivity: '1 hour ago',
      status: 'active',
      moderators: ['Admin']
    },
    {
      id: 4,
      name: 'Mental Health',
      description: 'Mental wellness support',
      members: 312,
      messages: 2156,
      lastActivity: '5 minutes ago',
      status: 'active',
      moderators: ['Admin', 'Dr. Vikram']
    },
    {
      id: 5,
      name: 'Nutrition & Diet',
      description: 'Healthy eating tips',
      members: 198,
      messages: 1234,
      lastActivity: '30 minutes ago',
      status: 'active',
      moderators: ['Admin']
    }
  ]);

  const [recentMessages] = useState([
    {
      id: 1,
      room: 'General Health',
      user: 'John Doe',
      message: 'What are some good exercises for back pain?',
      time: '2 mins ago',
      flagged: false
    },
    {
      id: 2,
      room: 'Cardiology',
      user: 'Sarah Johnson',
      message: 'Is it normal to feel dizzy after blood pressure medication?',
      time: '5 mins ago',
      flagged: false
    },
    {
      id: 3,
      room: 'Mental Health',
      user: 'Mike Chen',
      message: 'Buy cheap medications here! Click link...',
      time: '10 mins ago',
      flagged: true
    },
    {
      id: 4,
      room: 'Pediatrics',
      user: 'Emily Brown',
      message: 'My baby has a fever of 101°F. Should I be worried?',
      time: '15 mins ago',
      flagged: false
    },
    {
      id: 5,
      room: 'Nutrition & Diet',
      user: 'David Wilson',
      message: 'What are the best foods for reducing cholesterol?',
      time: '20 mins ago',
      flagged: false
    },
    {
      id: 6,
      room: 'General Health',
      user: 'Lisa Anderson',
      message: 'GET RICH QUICK! Investment opportunity...',
      time: '25 mins ago',
      flagged: true
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedRoom, setSelectedRoom] = useState(null);

  const filteredRooms = chatRooms.filter(room => {
    const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || room.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleViewRoom = (room) => {
    setSelectedRoom(room);
  };

  const handleDeleteMessage = (messageId) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      console.log('Deleting message:', messageId);
    }
  };

  const handleBanUser = (userName) => {
    if (window.confirm(`Are you sure you want to ban user "${userName}"?`)) {
      console.log('Banning user:', userName);
    }
  };

  return (
    <div>
      {/* Stats Cards */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '24px' }}>
        <div className="stat-card">
          <div className="stat-info">
            <h3>Total Rooms</h3>
            <div className="stat-value">{chatRooms.length}</div>
          </div>
          <div className="stat-icon blue">
            💬
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <h3>Total Members</h3>
            <div className="stat-value">{chatRooms.reduce((sum, room) => sum + room.members, 0)}</div>
          </div>
          <div className="stat-icon green">
            👥
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <h3>Total Messages</h3>
            <div className="stat-value">{chatRooms.reduce((sum, room) => sum + room.messages, 0)}</div>
          </div>
          <div className="stat-icon purple">
            📨
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <h3>Flagged Messages</h3>
            <div className="stat-value">{recentMessages.filter(m => m.flagged).length}</div>
          </div>
          <div className="stat-icon orange">
            ⚠️
          </div>
        </div>
      </div>

      {/* Chat Rooms */}
      <div className="admin-table-container" style={{ marginBottom: '24px' }}>
        <div className="admin-table-header">
          <h2 className="admin-table-title">Chat Rooms</h2>
          <div className="admin-table-actions">
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ 
                position: 'absolute', 
                left: '12px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#9ca3af'
              }} />
              <input
                type="text"
                placeholder="Search rooms..."
                className="admin-table-filter"
                style={{ paddingLeft: '40px', width: '250px' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select 
              className="admin-table-filter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Room Name</th>
              <th>Description</th>
              <th>Members</th>
              <th>Messages</th>
              <th>Moderators</th>
              <th>Last Activity</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRooms.map((room) => (
              <tr key={room.id}>
                <td>
                  <div style={{ fontWeight: '600', color: '#1f2937' }}>
                    {room.name}
                  </div>
                </td>
                <td style={{ color: '#6b7280', fontSize: '14px' }}>
                  {room.description}
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#3b82f6' }}>
                      {room.members}
                    </span>
                    <span style={{ fontSize: '12px', color: '#9ca3af' }}>members</span>
                  </div>
                </td>
                <td>
                  <div style={{ fontWeight: '600', color: '#6b7280' }}>
                    {room.messages.toLocaleString()}
                  </div>
                </td>
                <td>
                  <div style={{ fontSize: '13px', color: '#6b7280' }}>
                    {room.moderators.join(', ')}
                  </div>
                </td>
                <td style={{ fontSize: '13px', color: '#9ca3af' }}>
                  {room.lastActivity}
                </td>
                <td>
                  <span className={`status-badge ${room.status}`}>
                    {room.status}
                  </span>
                </td>
                <td>
                  <div className="table-actions">
                    <button 
                      className="btn-icon"
                      onClick={() => handleViewRoom(room)}
                      title="View Room"
                    >
                      <Eye size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Messages & Flagged Content */}
      <div className="admin-table-container">
        <div className="admin-table-header">
          <h2 className="admin-table-title">Recent Messages & Moderation</h2>
          <div style={{ 
            background: '#fef2f2',
            color: '#991b1b',
            padding: '6px 12px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <AlertTriangle size={16} />
            {recentMessages.filter(m => m.flagged).length} Flagged
          </div>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Room</th>
              <th>User</th>
              <th>Message</th>
              <th>Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentMessages.map((msg) => (
              <tr key={msg.id} style={{ 
                background: msg.flagged ? '#fef2f2' : 'transparent'
              }}>
                <td>
                  <span style={{ 
                    background: '#eff6ff',
                    color: '#2563eb',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {msg.room}
                  </span>
                </td>
                <td>
                  <div className="patient-info">
                    <div className="patient-avatar" style={{ width: '32px', height: '32px', fontSize: '14px' }}>
                      {msg.user.charAt(0)}
                    </div>
                    <div className="patient-name">{msg.user}</div>
                  </div>
                </td>
                <td>
                  <div style={{ 
                    maxWidth: '400px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    color: msg.flagged ? '#991b1b' : '#4b5563'
                  }}>
                    {msg.message}
                  </div>
                </td>
                <td style={{ fontSize: '13px', color: '#9ca3af' }}>
                  {msg.time}
                </td>
                <td>
                  {msg.flagged ? (
                    <span style={{ 
                      background: '#fef2f2',
                      color: '#dc2626',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '600',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <AlertTriangle size={14} />
                      Flagged
                    </span>
                  ) : (
                    <span style={{ 
                      background: '#dcfce7',
                      color: '#166534',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '600',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <CheckCircle size={14} />
                      Clean
                    </span>
                  )}
                </td>
                <td>
                  <div className="table-actions">
                    <button 
                      className="btn-icon delete"
                      onClick={() => handleDeleteMessage(msg.id)}
                      title="Delete Message"
                    >
                      <Trash2 size={18} />
                    </button>
                    <button 
                      className="btn-icon"
                      onClick={() => handleBanUser(msg.user)}
                      title="Ban User"
                      style={{ color: '#dc2626' }}
                    >
                      <Ban size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Room Details Modal */}
      {selectedRoom && (
        <RoomDetailsModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </div>
  );
};

// Room Details Modal
const RoomDetailsModal = ({ room, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '600px' }}
      >
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          marginBottom: '24px'
        }}>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '4px' }}>
              {room.name}
            </h2>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>{room.description}</p>
          </div>
          <button 
            onClick={onClose}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              padding: '4px',
              color: '#6b7280'
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <div style={{ 
            background: '#f9fafb',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#3b82f6' }}>
              {room.members}
            </div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
              Members
            </div>
          </div>
          <div style={{ 
            background: '#f9fafb',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#10b981' }}>
              {room.messages}
            </div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
              Messages
            </div>
          </div>
          <div style={{ 
            background: '#f9fafb',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <span className={`status-badge ${room.status}`}>
              {room.status}
            </span>
            <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '8px' }}>
              Status
            </div>
          </div>
        </div>

        <div className="modal-details">
          <div className="modal-detail-row">
            <span className="modal-detail-label">Moderators</span>
            <span className="modal-detail-value">{room.moderators.join(', ')}</span>
          </div>
          <div className="modal-detail-row">
            <span className="modal-detail-label">Last Activity</span>
            <span className="modal-detail-value">{room.lastActivity}</span>
          </div>
          <div className="modal-detail-row">
            <span className="modal-detail-label">Created</span>
            <span className="modal-detail-value">January 15, 2025</span>
          </div>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          marginTop: '24px'
        }}>
          <button 
            className="modal-btn modal-btn-secondary"
            onClick={onClose}
          >
            Close
          </button>
          <button 
            className="modal-btn modal-btn-primary"
            onClick={() => window.location.href = '/chat'}
          >
            View Chat Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatManagement;