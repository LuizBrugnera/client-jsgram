import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "./AuthContext";
import { useContext, useEffect } from 'react';

function ProtectedRoute({ children }) {
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    console.log("Authentication status changed:", isAuthenticated);
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;