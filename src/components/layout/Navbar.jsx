import { NavLink } from 'react-router-dom';
import { Home, Stethoscope, MessageSquare, Phone } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/specializations', label: 'Specializations', icon: Stethoscope },
    { path: '/chat', label: 'Chat', icon: MessageSquare },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-list">
          {navItems.map(({ path, label, icon: Icon }) => (
            <li key={path} className="nav-item">
              <NavLink
                to={path}
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                <Icon size={20} />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;