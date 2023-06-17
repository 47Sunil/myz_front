import React from 'react';
import CommonHolder from './components/CommonHolder';
import { useQueryClient } from 'react-query';

const Index = () => {
  const queryClient = useQueryClient();
  const { user } = queryClient.getQueryData('user');
  return (
    <>
      <div className='bg-[rgba(0,0,0,.5)] fixed inset-0 w-screen h-screen z-50 flex justify-center items-center'>
        <div className='bg-[#f2f2f2] w-[50vw] h-[65vh] rounded-2xl p-4 flex flex-col gap-4 items-center'>
          <h1 className='bg-gradient-landing-blue text-transparent bg-clip-text text-[2.5rem] font-semibold'>
            Upgrade Your Plan
          </h1>
          <h2 className='text-[#1d1d1d] text-xl'>
            Current Plan: {user.subscription.planName}{' '}
          </h2>
          <div className='w-full h-full bg-[#d2d2d2]'></div>
        </div>
      </div>
      <CommonHolder />
    </>
  );
};

export default Index;
