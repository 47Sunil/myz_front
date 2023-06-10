import React from 'react';
import BellIcon from '../../assets/svg/BellLogo';
import NegativeRadius from '../../assets/svg/NegativeRadius';
import { useQueryClient } from 'react-query';

const HeaderBar = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData('user');
  console.log(data?.user.name);
  return (
    <>
      <div className='h-full flex p-2 items-center flex-row justify-end relative'>
        <NegativeRadius
          className='absolute left-0 top-full'
          color='#FFFFFF0D'
          value='24'
          angle='top'
        ></NegativeRadius>

        <div className='my-2 px-4 border-y-0  border border-[#FFFFFF1A] text-[#908C99]'>
          <BellIcon />
        </div>
        <div className='p-2  grid grid-cols-12 gap-2'>
          <div className='col-span-8 flex flex-col items-end justify-center'>
            <p className='text-sm text-white'>{data?.user.name}</p>
            <p className='text-xs -mt-0.5 text-[#FFFFFFB5]'>
              {data?.user.subscription.planName}
            </p>
          </div>
          <div className='col-span-4 w-9 h-9'>
            <img
              className='rounded-circle  rounded-full object-cover w-full h-full'
              src={data?.user.profile}
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Corner = ({ className }) => {
  return (
    <svg
      width='22'
      height='22'
      viewBox='0 0 42 42'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M0 0H42V0C18.9202 0.27807 0.27807 18.9202 0 42V42V0Z'
        fill='white'
        fill-opacity='0.05'
      />
    </svg>
  );
};

export default HeaderBar;
