import { useState, useEffect } from 'react';
// import { Calendar, Clock } from 'lucide-react';
import { Calendar ,Clock } from 'lucide-react';
// import { getAvailableSlots } from '../../services/mockData';
import { getAvailableSlots } from '../../services/mockData';


const TimeSlotPicker = ({ doctorId, onSlotSelect, selectedSlot }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    // Set default date to today
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setSelectedDate(formattedDate);
  }, []);

  useEffect(() => {
    if (selectedDate && doctorId) {
      const slots = getAvailableSlots(doctorId, selectedDate);
      setAvailableSlots(slots);
    }
  }, [selectedDate, doctorId]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    onSlotSelect(null); // Reset selected slot when date changes
  };

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30); // 30 days from now
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <div className="slot-picker-container">
      <div className="date-selector">
        <label className="date-label">
          <Calendar size={16} style={{ display: 'inline', marginRight: '6px' }} />
          Select Date
        </label>
        <input
          type="date"
          className="date-input"
          value={selectedDate}
          onChange={handleDateChange}
          min={getTodayDate()}
          max={getMaxDate()}
        />
      </div>

      <div>
        <label className="slots-label">
          <Clock size={16} style={{ display: 'inline', marginRight: '6px' }} />
          Available Time Slots
        </label>
        
        {availableSlots.length > 0 ? (
          <div className="slots-grid">
            {availableSlots.map((slot) => (
              <button
                key={slot}
                className={`slot-button ${selectedSlot === slot ? 'selected' : ''}`}
                onClick={() => onSlotSelect(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        ) : (
          <div className="no-slots-message">
            <p>No slots available for this date</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeSlotPicker;