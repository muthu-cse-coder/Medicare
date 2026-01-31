import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import DoctorList from '../components/doctors/DoctorList';
import { specializations } from '../services/mockData';

const SpecializationDoctors = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const specialization = specializations.find(s => s.id === parseInt(id));

  if (!specialization) {
    return <div>Specialization not found</div>;
  }

  return (
    <div className="specializations-container">
      <button 
        onClick={() => navigate('/specializations')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'none',
          border: 'none',
          color: '#2563eb',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          marginBottom: '24px',
          padding: '8px 0'
        }}
      >
        <ArrowLeft size={18} />
        Back to Specializations
      </button>

      {/* <div className="page-header">
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>{specialization.icon}</div>
        <h1 className="page-title">{specialization.name}</h1>
        <p className="page-subtitle">{specialization.description}</p>
      </div> */}

      <DoctorList specializationId={parseInt(id)} />
    </div>
  );
};

export default SpecializationDoctors;