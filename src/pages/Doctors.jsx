import { useParams, useNavigate } from "react-router-dom";

const Doctors = () => {
  const { specialization } = useParams();
  const navigate = useNavigate();

  const doctors = [
    { id: 1, name: "Dr. Kumar", hospital: "Apollo" },
    { id: 2, name: "Dr. Ravi", hospital: "Global Hospital" }
  ];

  return (
    <div>
      <h2>{specialization} Doctors</h2>

      {doctors.map((doc) => (
        <div key={doc.id}>
          <p>{doc.name}</p>
          <p>{doc.hospital}</p>
          <button onClick={() => navigate(`/doctor/${doc.id}`)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Doctors;
