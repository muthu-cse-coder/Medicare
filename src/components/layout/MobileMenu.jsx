import { useState } from 'react';
import { Menu, X, Home, Stethoscope, MessageSquare, Phone } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/specializations', label: 'Specializations', icon: Stethoscope },
    { path: '/chat', label: 'Chat', icon: MessageSquare },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="mobile-nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 999,
          }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        style={{
          position: 'fixed',
          bottom: isOpen ? 0 : '-100%',
          left: 0,
          right: 0,
          background: 'white',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          padding: '24px',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
          transition: 'bottom 0.3s ease',
          zIndex: 1000,
        }}
      >
        <div style={{ 
          width: '40px',
          height: '4px',
          background: '#e5e7eb',
          borderRadius: '2px',
          margin: '0 auto 24px'
        }} />

        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {navItems.map(({ path, label, icon: Icon }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: isActive ? '#2563eb' : '#4b5563',
                    background: isActive ? '#eff6ff' : 'transparent',
                    fontWeight: isActive ? '600' : '500',
                    transition: 'all 0.2s'
                  })}
                >
                  <Icon size={24} />
                  <span style={{ fontSize: '16px' }}>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;