import { useParams, Navigate } from 'react-router-dom';
import DoctorDetails from '../components/doctors/DoctorDetails';

import { getDoctorById } from '../services/mockData';


const DoctorDetailsPage = () => {
  const { id } = useParams();
  const doctor = getDoctorById(id);

  if (!doctor) {
    return <Navigate to="/specializations" />;
  }

  return <DoctorDetails doctor={doctor} />;
};

export default DoctorDetailsPage;