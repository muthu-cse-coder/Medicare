


// import React from 'react';




// const Home = () => {
//   return (
//     <div className="home-container">

//       {/* Hero Section */}
//       <div className="hero">
//         <h1>Welcome to MediCare</h1>
//         <p>Your trusted healthcare partner for booking appointments with top specialists</p>
//         <a href="/specializations" className="btn-primary">Find a Doctor</a>
//       </div>



//     </div>
//   );
// };

// export default Home;

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }} className="hero">
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
        Welcome to MediCare
      </h1>
      {user && (
        <p style={{ fontSize: '20px', color: '#ffffff', marginBottom: '16px' ,fontWeight:'30px'}}>
          Hello, {user.name}! 👋
        </p>
      )}
      <p style={{ fontSize: '18px', color: 'white', marginBottom: '32px' }}>
        Your trusted healthcare partner for booking appointments with top specialists
      </p>
      <button 
        onClick={() => navigate('/specializations')}
        className="btn-primary" 
        style={{ display: 'inline-block', textDecoration: 'none' }}
      >
        Find a Doctor
      </button>
    </div>
  );
};

export default Home;