import React from 'react';
import AccountsError from './components/AccountsError';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error, 'adas');
  return <h1>{error.data}</h1>;
};

export default Error;
