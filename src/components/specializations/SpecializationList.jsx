// import { useNavigate } from 'react-router-dom'; 
// import SpecializationCard from './SpecializationCard';
// import { specializations } from '../../services/mockData';

// const SpecializationList = () => {
//   const navigate = useNavigate(); 

//   return (
//     <div className="specializations-container">
//       <input/>filter add
//       {/* <div className="page-header">
//         <h1 className="page-title">Our Specializations</h1>
//         <p className="page-subtitle">Choose from our wide range of medical specialties</p>
//       </div> */}

//       <div className="specializations-grid">
//         {specializations.map((spec) => (
//           <SpecializationCard
//             key={spec.id}
//             specialization={spec}
//             onClick={() => navigate(`/specializations/${spec.id}`)}  
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SpecializationList;

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SpecializationCard from './SpecializationCard';
import { specializations } from '../../services/mockData';

const SpecializationList = () => {
  const navigate = useNavigate();

  const [searchSpec, setSearchSpec] = useState('');
  const [location, setLocation] = useState('');

  const filteredSpecializations = specializations.filter((spec) => {
    const matchesSpec = spec.name
      .toLowerCase()
      .includes(searchSpec.toLowerCase());

    const matchesLocation = location
      ? spec.location?.toLowerCase().includes(location.toLowerCase())
      : true;

    return matchesSpec && matchesLocation;
  });

  return (
    <div className="specializations-container">

      {/* 🔍 Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search specialization..."
          value={searchSpec}
          onChange={(e) => setSearchSpec(e.target.value)}
        />

        {/* <input
          type="text"
          placeholder="Location (e.g. Chennai)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        /> */}
      </div>

      {/* Cards */}
      <div className="specializations-grid">
        {filteredSpecializations.length > 0 ? (
          filteredSpecializations.map((spec) => (
            <SpecializationCard
              key={spec.id}
              specialization={spec}
              onClick={() => navigate(`/specializations/${spec.id}`)}
            />
          ))
        ) : (
          <p>No specializations found</p>
        )}
      </div>
    </div>
  );
};

export default SpecializationList;
