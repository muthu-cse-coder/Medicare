// const Home = () => {
//   return (
//     <div style={{ textAlign: 'center', padding: '60px 20px' }}>
//       <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>
//         Welcome to MediCare
//       </h1>
//       <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '32px' }}>
//         Your trusted healthcare partner for booking appointments with top specialists
//       </p>
//       <a href="/specializations" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
//         Find a Doctor
//       </a>
//     </div>
//   );
// };

// export default Home;


import React from 'react';




const Home = () => {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to MediCare</h1>
        <p>Your trusted healthcare partner for booking appointments with top specialists</p>
        <a href="/specializations" className="btn-primary">Find a Doctor</a>
      </div>



    </div>
  );
};

export default Home;
