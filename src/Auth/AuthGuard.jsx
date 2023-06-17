import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useLoginMutation } from '../actions/User/Login';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ component }) => {
  const { data, isLoading, isFetching, isRefetching } = useQuery(
    'user',
    useLoginMutation
  );
  const navigate = useNavigate();
  console.log(data, 'auto login auth guarde');
  return (
    <>
      {!isLoading &&
        !isFetching &&
        !isRefetching &&
        ((data !== undefined && data?.status) || data?.success ? (
          <>{component}</>
        ) : (
          navigate('/accounts/signin')
        ))}
    </>
  );
};
export default AuthGuard;
