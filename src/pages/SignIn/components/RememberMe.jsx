import React from 'react';
import CustomCheckbox from '../../../components/CustomCheckBox/CustomCheckbox';

const RememberMe = () => {
  return (
    <div className='flex items-center gap-2'>
      {' '}
      <CustomCheckbox id='rememberUser' />
      <label
        htmlFor='rememberUser'
        className='font-normal text-[20px] leading-[33px] text-[rgba(255,255,255,.82)] cursor-pointer'
      >
        Remember Me
      </label>
    </div>
  );
};

export default RememberMe;
