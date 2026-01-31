import { Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



// const navigate=useNavigate()
// const handle=()=>{
//     navigate("/login")
// }
const SpecializationCard = ({ specialization, onClick }) => {
  return (
    <div className="specialization-card" onClick={onClick}>
      <span className="spec-icon">{specialization.icon}</span>
      <h3 className="spec-name">{specialization.name}</h3>
      <p className="spec-description">{specialization.description}</p>
      <div className="spec-doctor-count">
        <Users size={14} style={{ display: 'inline', marginRight: '4px' }} />
        {specialization.doctorCount} Doctors Available
      </div>
    </div>
  );
};

export default SpecializationCard;