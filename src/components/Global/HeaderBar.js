import React, { useState } from 'react';
import BellIcon from '../../assets/svg/BellLogo';
import NegativeRadius from '../../assets/svg/NegativeRadius';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Popover } from '@headlessui/react';
import user from '../../assets/icons/user.png';

function MyPopover() {
  const [notification, setNotification] = useState([]);
  return (
    <Popover className='relative'>
      <Popover.Button className={'outline-none'}>
        {' '}
        <BellIcon />
      </Popover.Button>

      <Popover.Panel className='absolute top-12 right-0 w-[10rem] bg-[#fff] text-black py-2 px-4 rounded-lg'>
        <ul className='grid place-content-center'>
          {!notification.length < 1 ? (
            notification.map((i) => <li>i</li>)
          ) : (
            <h1>You have no new notification</h1>
          )}
        </ul>

        {/* <img src="/solutions.jpg" alt="" /> */}
      </Popover.Panel>
    </Popover>
  );
}
const HeaderBar = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData('user');
  console.log(data?.user.name);
  const navigate = useNavigate();
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
          <MyPopover />
        </div>
        <div className='p-2  grid grid-cols-12 gap-2'>
          <div className='col-span-8 flex flex-col items-end justify-center'>
            <p
              className='text-sm text-white cursor-pointer'
              onClick={() => navigate('/account')}
            >
              {data?.user.name}
            </p>
            <p
              className='text-xs -mt-0.5 text-[#FFFFFFB5] cursor-pointer'
              onClick={() => navigate('/subscription')}
            >
              {data?.user.subscription.planName}
            </p>
          </div>
          <div className='col-span-4 w-9 h-9'>
            <img
              className='rounded-circle rounded-full object-cover w-full h-full cursor-pointer'
              src={data?.user.profile || user}
              alt=''
              onClick={() => navigate('/account')}
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
