import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from './firebaseConfig'; // Import your Firebase auth instance
import { auth } from '../Components/Authentication/Login'; // Import your Firebase auth instance

const PrivateRoute = ({ element }) => {
  const [user] = useAuthState(auth);

  if (user) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
