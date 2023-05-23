import React, { useEffect } from 'react';
import { useLoginMutation } from '../../actions/User/Login';

const Logintest = () => {
  const { data, isLoading } = useLoginMutation();
  useEffect(() => {
    handleLogin();
  }, []);
  const handleLogin = async () => {
    await data?.data.mutateAsync({
      email: 'rrsonawne123@hotmail.com',
      password: 'rohit123',
    });
  };

  return <></>;
};

export default Logintest;
