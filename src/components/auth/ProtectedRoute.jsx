import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px',
        color: '#6b7280'
      }}>
        Loading...
      </div>
    );
  }

  // User இல்லாட்டி login page-க்கு redirect
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // User இருந்தா page காட்டு
  return children;
};

export default ProtectedRoute;