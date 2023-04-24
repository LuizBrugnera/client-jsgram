import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "./AuthContext";
import { useContext } from 'react';

function ProtectedRoute({ children }) {
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return (
      <Navigate
        to={{
          pathname: '/',
          state: { from: location },
        }}
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;