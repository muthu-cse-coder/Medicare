import { useState } from 'react';
import DoctorCard from './DoctorCard';
import { getDoctorsBySpecialization } from '../../services/mockData';

const DoctorList = ({ specializationId }) => {
  const allDoctors = getDoctorsBySpecialization(specializationId);


  const [location, setLocation] = useState('');

 
  const doctors = location
    ? allDoctors.filter((doctor) =>
        doctor.hospital.toLowerCase().includes(location.toLowerCase())
      )
    : allDoctors;

  return (
    <div className="doctors-section">
      <h2 className="section-title">Available Doctors</h2>

    
      <div className="location-filter">

        <input
          type="text"
          id="location"
          placeholder="Enter hospital or city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {doctors.length === 0 ? (
        <div className="no-doctors">
          <div className="no-doctors-icon">🩺</div>
          <p>No doctors available for this specialization and location</p>
        </div>
      ) : (
        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorList;



