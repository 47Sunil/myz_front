import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../actions/User/Logout';
const Logout = () => {
  const logoutMutation = useLogoutMutation();
  const handleLogin = async () => {
    await logoutMutation.mutateAsync();
  };
  handleLogin();
  //   const navigate = useNavigate();
  //   navigate('/accounts/signin');
  return <div>Logging out...</div>;
};

export default Logout;
