
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (user.role === 'akademik') {
    return <Navigate to="/akademik" replace />;
  } else if (user.role === 'dosen') {
    return <Navigate to="/dosen" replace />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default Index;
