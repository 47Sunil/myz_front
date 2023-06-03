import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useLoginMutation } from '../actions/User/Login';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ component }) => {
  const { data, isLoading } = useQuery('user', useLoginMutation);
  const navigate = useNavigate();
  console.log(data, 'auto login auth guarde');
  return (
    <>
      {!isLoading &&
        (data?.success || data?.status ? (
          <>{component}</>
        ) : (
          navigate('/accounts/signin')
        ))}
    </>
  );
};
export default AuthGuard;
