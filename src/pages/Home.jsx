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

// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// import { gql } from "@apollo/client/core";
// import { useQuery } from "@apollo/client/react";

// const ME_QUERY = gql`
//   query Me {
//     me {
//       id
//       name
//       email
//       phone
//       role
//       created_at
//     }
//   }
// `;

// const Home = () => {
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   const { data, loading, error } = useQuery(ME_QUERY);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div style={{ textAlign: "center", padding: "60px 20px" }} className="hero">
//       <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "white", marginBottom: "16px" }}>
//         Welcome to MediCare
//       </h1>

//       {/* {user && (
//         <p style={{ fontSize: "20px", color: "#ffffff", marginBottom: "16px", fontWeight: "30px" }}>
//           Hello, {user.name}! 👋
//         </p>
//       )} */}

//       {/* NEW: Show data from GraphQL */}
//       {data && (
//         <div style={{fontSize: "20px", color: "#ffffff", marginBottom: "16px", fontWeight: "100px"  }}>
//           <p>Hello, {data.me.name}! 👋</p>
//         </div>
//       )}

//       <p style={{ fontSize: "18px", color: "white", marginBottom: "32px" }}>
//         Your trusted healthcare partner for booking appointments with top specialists
//       </p>

//       <button
//         onClick={() => navigate("/specializations")}
//         className="btn-primary"
//         style={{ display: "inline-block", textDecoration: "none" }}
//       >
//         Find a Doctor
//       </button>
//     </div>
//   );
// };

// export default Home;
