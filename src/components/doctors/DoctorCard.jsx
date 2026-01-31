// import { MapPin, Star, Briefcase, Clock } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const DoctorCard = ({ doctor }) => {
//   const navigate = useNavigate();

  

//   return (
    
//     <div className="doctor-card" onClick={() => navigate(`/doctor/${doctor.id}`)}>
//       <div className="doctor-card-header">
//         <img src={doctor.image} alt={doctor.name} className="doctor-image" />
//         <div className="doctor-info">
//           <h3 className="doctor-name">{doctor.name}</h3>
//           <p className="doctor-specialization">{doctor.specialization}</p>
//           <p className="doctor-hospital">
//             <MapPin size={14} />
//             {doctor.hospital}
//           </p>
//         </div>
//       </div>
//       <div className="doctor-card-body">
//         <div className="doctor-stats">
//           <div className="stat-item">
//             <Briefcase size={16} />
//             <span className="stat-value">{doctor.experience}</span> years exp.
//           </div>
//           <div className="stat-item">
//             <span className="rating-badge">
//               <Star size={14} fill="currentColor" />
//               {doctor.rating}
//             </span>
//             ({doctor.reviews} reviews)
//           </div>
//         </div>

//         <div className="doctor-fee">
//           <span className="fee-label">Consultation Fee</span>
//           <span className="fee-amount">₹{doctor.consultationFee}</span>
//         </div>

//         <button className="view-details-btn">
//           View Details & Book
//         </button>
//       </div>
//     </div>
//   );
// };


// export default DoctorCard;

import { MapPin, Star, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  // Example logic: online if doctor has availability today
  const isOnline = doctor.availability?.monday?.length > 0;

  return (
    <div className="doctor-card" onClick={() => navigate(`/doctor/${doctor.id}`)}>

      {/* Online / Offline status */}
      <div className={`status ${isOnline ? 'online' : 'offline'}`}>
        <span className="status-dot"></span>
        {isOnline ? 'Online' : 'Offline'}
      </div>

      <div className="doctor-card-header">
        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
        <div className="doctor-info">
          <h3 className="doctor-name">{doctor.name}</h3>
          <p className="doctor-specialization">{doctor.specialization}</p>
          <p className="doctor-hospital">
            <MapPin size={14} />
            {doctor.hospital}
          </p>
        </div>
      </div>

      <div className="doctor-card-body">
        <div className="doctor-stats">
          <div className="stat-item">
            <Briefcase size={16} />
            <span className="stat-value">{doctor.experience}</span> years exp.
          </div>
          <div className="stat-item">
            <span className="rating-badge">
              <Star size={14} fill="currentColor" />
              {doctor.rating}
            </span>
            ({doctor.reviews} reviews)
          </div>
        </div>

        <div className="doctor-fee">
          <span className="fee-label">Consultation Fee</span>
          <span className="fee-amount">₹{doctor.consultationFee}</span>
        </div>

        <button className="view-details-btn">
          View Details & Book
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
