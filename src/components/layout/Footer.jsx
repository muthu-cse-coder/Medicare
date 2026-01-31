import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>MediCare</h3>
            <p>Your trusted healthcare partner. Book appointments with top specialists easily.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/specializations">Specializations</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li className="contact-item">
                <Phone size={16} />
                <span>+91 6369452285</span>
              </li>
              <li className="contact-item">
                <Mail size={16} />
                <span>muthuselvantsy22@gmail.com</span>
              </li>
              <li className="contact-item">
                <MapPin size={16} />
                <span>Tirunelveli,Tamilnadu</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 MediCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;