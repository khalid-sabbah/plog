import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRotue = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRotue;