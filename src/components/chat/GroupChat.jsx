import { useState, useEffect, useRef } from 'react';
import { Send ,Users } from 'lucide-react';
// import { Send , Users } form ''
// import { Send ,User } from 'lucide-react';
// import { Send, Users } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
// import { useAuth } from '../../hooks/useAuth';

const chatRooms = [
  {
    id: 1,
    name: 'General Health',
    description: 'General health discussions',
    members: 234
  },
  {
    id: 2,
    name: 'Cardiology',
    description: 'Heart health discussions',
    members: 89
  },
  {
    id: 3,
    name: 'Pediatrics',
    description: 'Child health discussions',
    members: 156
  },
  {
    id: 4,
    name: 'Mental Health',
    description: 'Mental wellness support',
    members: 312
  },
  {
    id: 5,
    name: 'Nutrition & Diet',
    description: 'Healthy eating tips',
    members: 198
  }
];

const initialMessages = {
  1: [
    {
      id: 1,
      sender: 'Sarah Johnson',
      message: 'Hello everyone! Any tips for staying healthy during winter?',
      time: '10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'Mike Chen',
      message: 'Stay hydrated and get enough vitamin D!',
      time: '10:32 AM',
      isOwn: false
    }
  ],
  2: [
    {
      id: 1,
      sender: 'Dr. Priya',
      message: 'Remember to monitor your blood pressure regularly.',
      time: '11:00 AM',
      isOwn: false
    }
  ],
  3: [
    {
      id: 1,
      sender: 'Parent Group',
      message: 'What are the recommended vaccines for 2-year-olds?',
      time: '09:15 AM',
      isOwn: false
    }
  ],
  4: [],
  5: []
};

const GroupChat = () => {
  const [selectedRoom, setSelectedRoom] = useState(chatRooms[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const { user } = useAuth();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, selectedRoom]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!newMessage.trim() || !user) return;

    const newMsg = {
      id: Date.now(),
      sender: user.name,
      message: newMessage.trim(),
      time: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      isOwn: true
    };

    setMessages(prev => ({
      ...prev,
      [selectedRoom.id]: [...(prev[selectedRoom.id] || []), newMsg]
    }));

    setNewMessage('');
  };

  const currentMessages = messages[selectedRoom.id] || [];

  if (!user) {
    return (
      <div className="chat-container">
        <div className="login-required" style={{ padding: '60px 20px', textAlign: 'center' }}>
          Please <a href="/login">login</a> to access group chat
        </div>
      </div>
    );
  }

  return (
    <div className="chat-container ">
      {/* <div className="page-header">
        <h1 className="page-title">Group Chat</h1>
        <p className="page-subtitle">Connect with patients and healthcare professionals</p>
      </div> */}

      <div className="chat-layout " >
        <div className="">
          <div className="chat-sidebar-header">
            <Users size={20} style={{ display: 'inline',marginRight: '8px' }} />
            Chat Rooms
          </div>
          
          <div className="chat-rooms-list">
            {chatRooms.map((room) => (
              <div
                key={room.id}
                className={`chat-room-item ${selectedRoom.id === room.id ? 'active' : ''}`}
                onClick={() => setSelectedRoom(room)}
              >
                <div className="chat-room-name">{room.name}</div>
                <div className="chat-room-description">{room.description}</div>
                <div className="chat-room-count">{room.members} members</div>
              </div>
            ))}
          </div>
        </div>

        <div className="chat-main">
          <div className="chat-header">
            <div className="chat-header-title">{selectedRoom.name}</div>
            <div className="chat-header-subtitle">
              {selectedRoom.members} members • {selectedRoom.description}
            </div>
          </div>

          <div className="chat-messages">
            {currentMessages.length === 0 ? (
              <div className="chat-empty">
                No messages yet. Start the conversation!
              </div>
            ) : (
              currentMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`chat-message ${msg.isOwn ? 'own' : ''}`}
                >
                  <div className={`message-avatar ${msg.isOwn ? 'own' : ''}`}>
                    {msg.sender.charAt(0)}
                  </div>
                  <div className="message-content">
                    {!msg.isOwn && (
                      <div className="message-sender">{msg.sender}</div>
                    )}
                    <div className="message-bubble">{msg.message}</div>
                    <div className="message-time">{msg.time}</div>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-container">
            <form onSubmit={handleSendMessage}>
              <div className="chat-input-wrapper">
                <textarea
                  className="chat-input"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(e);
                    }
                  }}
                  rows="1"
                />
                <button
                  type="submit"
                  className="chat-send-btn"
                  disabled={!newMessage.trim()}
                >
                  <Send size={18} />
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;