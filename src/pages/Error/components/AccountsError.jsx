import React from 'react';
import { useRouteError } from 'react-router-dom';

const AccountsError = () => {
  const error = useRouteError();
  console.log(error);
  return <div>AccountsError</div>;
};

export default AccountsError;
