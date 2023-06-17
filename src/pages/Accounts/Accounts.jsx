import React from 'react';
import { useParams } from 'react-router-dom';
import SignIn from '../SignIn/index';
import SignUp from '../SignUp/index';
import Verify from '../SignUp/components/Verify';

const Accounts = () => {
  const { method } = useParams();
  return (
    <>
      {method === 'signin' ? (
        <SignIn />
      ) : method === 'signup' ? (
        <SignUp />
      ) : method === 'verify' ? (
        <Verify />
      ) : (
        <h1>Error</h1>
      )}
    </>
  );
};

export default Accounts;
