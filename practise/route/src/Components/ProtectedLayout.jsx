import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedLayout = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedLayout;
