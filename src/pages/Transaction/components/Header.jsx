import React from 'react';
import TransparentButton from '../../../components/TransparentButton/TransparentButton';

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center mb-10'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-white text-[34px] font-medium'>
          Transaction History
        </h1>
        <p className='text-[rgba(255,255,255,.58)] text-[19px] font-normal'>
          Manage your orders and Invoices
        </p>
      </div>
      <TransparentButton
        buttonText={'Export Orders'}
        transparent={true}
        filterBtn={false}
      />
    </div>
  );
};

export default Header;
