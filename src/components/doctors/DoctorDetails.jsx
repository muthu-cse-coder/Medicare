import { useState, useEffect } from 'react';
import { MapPin, Star, Briefcase, GraduationCap, Languages, Info } from 'lucide-react';
import TimeSlotPicker from '../appointments/TimeSlotPicker';
import BookingForm from '../appointments/BookingForm';
import { useAuth } from '../../hooks/useAuth';

const DoctorDetails = ({ doctor }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
  }, []);

  return (
    <div className="doctor-details-container">
      <div className="doctor-details-header">
        <div className="doctor-details-top">
          <img src={doctor.image} alt={doctor.name} className="doctor-details-image" />
          <div className="doctor-details-info">
            <h1 className="doctor-details-name">{doctor.name}</h1>
            <p className="doctor-details-spec">{doctor.specialization}</p>
            <p className="doctor-details-hospital">
              <MapPin size={16} />
              {doctor.hospital}
            </p>

            <div className="doctor-details-stats">
              <div className="detail-stat">
                <span className="detail-stat-label">Experience</span>
                <span className="detail-stat-value">
                  <Briefcase size={18} />
                  {doctor.experience} years
                </span>
              </div>
              <div className="detail-stat">
                <span className="detail-stat-label">Rating</span>
                <span className="detail-stat-value">
                  <Star size={18} fill="#fbbf24" color="#fbbf24" />
                  {doctor.rating} ({doctor.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="doctor-details-body">
        <div>
          <div className="doctor-about-section">
            <h2 className="section-heading">
              <Info size={20} />
              About
            </h2>
            <p className="about-text">{doctor.about}</p>

            <h3 className="section-heading">
              <GraduationCap size={20} />
              Education
            </h3>
            <p className="education-text">{doctor.education}</p>

            <h3 className="section-heading">
              <Languages size={20} />
              Languages
            </h3>
            <div className="languages-list">
              {doctor.languages.map((lang) => (
                <span key={lang} className="language-badge">{lang}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="booking-sidebar">
          <div className="booking-card">
            <div className="booking-fee">
              <div className="booking-fee-label">Consultation Fee</div>
              <div className="booking-fee-amount">₹{doctor.consultationFee}</div>
            </div>

            {user ? (
              <>
                <TimeSlotPicker
                  doctorId={doctor.id}
                  onSlotSelect={(slot) => setSelectedSlot(slot)}
                  selectedSlot={selectedSlot}
                />
                <BookingForm
                  doctor={doctor}
                  selectedSlot={selectedSlot}
                  selectedDate={selectedDate}
                />
              </>
            ) : (
              <div className="login-required">
                Please <a href="/login">login</a> to book an appointment
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;