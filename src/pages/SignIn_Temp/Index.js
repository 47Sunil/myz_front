import React, { useEffect } from 'react';
import { useLoginMutation } from '../../actions/User/Login';

const Logintest = () => {
  const loginMutation = useLoginMutation();

  useEffect(() => {
    handleLogin();
  });

  const handleLogin = async () => {
    await loginMutation.mutateAsync({
      email: 'rrsonawne123@hotmail.com',
      password: 'rohit123',
    });
  };

  return <></>;
};

export default Logintest;
