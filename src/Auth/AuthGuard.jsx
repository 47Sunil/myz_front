import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useLoginMutation } from '../actions/User/Login';

const AuthGuard = ({ component }) => {
  const { data, isLoading } = useQuery('user', useLoginMutation);
  console.log(data, 'auto login auth guarde');
  return (
    <>{!isLoading && (data?.success || data?.status) && <>{component}</>}</>
  );
};
export default AuthGuard;
