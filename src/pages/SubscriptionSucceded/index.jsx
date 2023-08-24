import React from 'react';
import Sidebar from './components/Sidebar';
import Logo from '../../assets/logos/logo.png';

const PaymentSuccess = () => {
  return (
    <div className=' w-full h-screen bg-[#0A1118] flex gap-20'>
      <Sidebar />
      <div className='w-full h-full'>
        <div className='w-[30%]'>
          <img
            src={Logo}
            alt='myzer'
          />
        </div>
        <h1 className='capitalize text-[70px] text-white font-bold='>
          welcome{' '}
          <span className='bg-gradient-orange-text bg-clip-text text-transparent'>
            onboard
          </span>
        </h1>
      </div>
    </div>
  );
};

export default PaymentSuccess;
