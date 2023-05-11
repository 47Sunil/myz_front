import React from 'react';
import { useParams } from 'react-router-dom';
import SignIn from '../SignIn/index';
import SignUp from '../SignUp/index';

const Accounts = () => {
  const { method } = useParams();
  return (
    <>
      {method === 'signin' ? (
        <SignIn />
      ) : method === 'signup' ? (
        <SignUp />
      ) : (
        'error 404'
      )}
    </>
  );
};

export default Accounts;
