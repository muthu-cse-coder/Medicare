import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../../context/NotificationContext';

const BookingSuccessModal = ({ isOpen, onClose, bookingDetails }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-icon">
          <CheckCircle size={40} color="#16a34a" />
        </div>
        
        <h2 className="modal-title">Appointment Booked Successfully!</h2>
        <p className="modal-message">
          Your appointment has been confirmed. You will receive a confirmation message shortly.
        </p>

        <div className="modal-details">
          <div className="modal-detail-row">
            <span className="modal-detail-label">Doctor</span>
            <span className="modal-detail-value">{bookingDetails.doctorName}</span>
          </div>
          <div className="modal-detail-row">
            <span className="modal-detail-label">Date</span>
            <span className="modal-detail-value">{bookingDetails.date}</span>
          </div>
          <div className="modal-detail-row">
            <span className="modal-detail-label">Time</span>
            <span className="modal-detail-value">{bookingDetails.time}</span>
          </div>
          <div className="modal-detail-row">
            <span className="modal-detail-label">Hospital</span>
            <span className="modal-detail-value">{bookingDetails.hospital}</span>
          </div>
        </div>

        <div className="modal-actions">
          <button className="modal-btn modal-btn-secondary" onClick={onClose}>
            Close
          </button>
          <button className="modal-btn modal-btn-primary" onClick={() => navigate('/')}>
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

const BookingForm = ({ doctor, selectedSlot, selectedDate }) => {
  const [showModal, setShowModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const { addNotification } = useNotification();

  const handleBooking = () => {
    const details = {
      doctorName: doctor.name,
      date: new Date(selectedDate).toLocaleDateString('en-IN', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      time: selectedSlot,
      hospital: doctor.hospital
    };

    setBookingDetails(details);
    setShowModal(true);

    // Add notification
    addNotification({
      title: 'Appointment Confirmed',
      message: `Your appointment with ${doctor.name} is confirmed for ${details.date} at ${selectedSlot}`,
      type: 'success'
    });
  };

  return (
    <>
      <button
        className="book-appointment-btn"
        onClick={handleBooking}
        disabled={!selectedSlot}
      >
        {selectedSlot ? 'Confirm Booking' : 'Select a Time Slot'}
      </button>

      <BookingSuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        bookingDetails={bookingDetails}
      />
    </>
  );
};

export default BookingForm;