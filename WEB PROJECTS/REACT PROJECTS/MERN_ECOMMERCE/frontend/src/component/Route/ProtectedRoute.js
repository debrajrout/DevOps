import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ isAdmin, element: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if(isAdmin === true && user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return (
    <Outlet />
  );
};

export default ProtectedRoute;
