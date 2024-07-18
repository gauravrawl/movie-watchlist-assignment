/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

//If user not logged in, then user will redirects to login screen
const ProtectedRoute = ({ children }) => {
  if (!sessionStorage.getItem('activeUser')) {
    return <Navigate to="/" replace />
  }
    return children;
};

export default ProtectedRoute;