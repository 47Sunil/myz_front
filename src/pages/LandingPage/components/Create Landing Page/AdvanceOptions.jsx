import React, { useState } from 'react';

const AdvanceOptions = ({ label, id, isChecked, setIsChecked }) => {
  return (
    <div className='flex gap-4 items-center h-8 w-[40%]'>
      <input
        type='checkbox'
        id={id}
        className='cursor-pointer'
        onChange={() => setIsChecked(!isChecked)}
      />
      <label
        htmlFor={id}
        className='text-white text-[12px] cursor-pointer'
      >
        {label}
      </label>
    </div>
  );
};

export default AdvanceOptions;
