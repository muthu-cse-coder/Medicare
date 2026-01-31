import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, send to API
        console.log('Form submitted:', formData);
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-container"   style={{ padding:"0px",margin:"0px"}}>
            <div className="contact-grid">
                <div className="contact-info-section">
                    <h2 className="contact-info-title">Get In Touch</h2>

                    <div className="contact-info-list">
                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <Phone size={24} color="#2563eb" />
                            </div>
                            <div className="contact-info-content">
                                <h3>Phone</h3>
                                <p>+91 63694522585</p>
                                <p>+91 123456788</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <Mail size={24} color="#2563eb" />
                            </div>
                            <div className="contact-info-content">
                                <h3>Email</h3>
                                <p>test@medicare.com</p>
                                <p>support@medicare.com</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <MapPin size={24} color="#2563eb" />
                            </div>
                            <div className="contact-info-content">
                                <h3>Address</h3>
                                <p>123 Health Street, Medical District</p>
                                <p>Chennai, Tamil Nadu 600001</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <Clock size={24} color="#2563eb" />
                            </div>
                            <div className="contact-info-content">
                                <h3>Working Hours</h3>
                                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h2 className="contact-form-title">Send us a Message</h2>

                    {submitted && (
                        <div className="success-message">
                            Thank you! Your message has been sent successfully.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-input"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="Enter your mail"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-input"
                                    placeholder="Enter your phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="form-input"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea
                                name="message"
                                className="form-textarea"
                                placeholder="Tell us how we can help you..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-primary">
                            <Send size={18} style={{ display: 'inline', marginRight: '8px' }} />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;