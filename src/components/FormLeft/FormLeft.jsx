import React from 'react';
const FormLeft = ({ logo, heading, headingIcon, form }) => {
  return (
    <div className='my-0 mx-auto w-[75%] '>
      <img
        className='logo_img'
        alt='logo'
        src={logo}
      />
      <div>
        <div className='flex items-center mb-[2rem] gap-[0.5rem]'>
          <h2 className='font-semibold text-[40px] leading-[60px] text-white'>
            {heading}
          </h2>
          <img
            className='h-[40px] w-[40px]'
            src={headingIcon}
            alt='rocket'
          />
        </div>
        {form}
      </div>
    </div>
  );
};

export default FormLeft;
