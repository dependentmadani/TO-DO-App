import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PrivateRoutes() {
  const { auth } = useAuth(undefined);

  if (auth === undefined) {
    return 'loading...';
  }
  return auth === true ? <Outlet /> : <Navigate to="/auth" />;
}

export default PrivateRoutes;
