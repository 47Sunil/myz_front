import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useLoginMutation } from '../actions/User/Login';

const AuthGuard = ({ component }) => {
  const { data, isLoading } = useQuery('user', useLoginMutation);
  return <>{!isLoading && data?.success && <div>{component}</div>}</>;
};
export default AuthGuard;
