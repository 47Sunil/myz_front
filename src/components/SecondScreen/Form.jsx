import React from 'react';
import DynamicInputManager from '../DynamicInputManager/DynamicInputManager';
import { Link, useLocation } from 'react-router-dom';
const Form = ({ headingText, btnText, children, className, to, onClick }) => {
  return (
    <div className={className}>
      <div className='w-full h-[100px] bg-black rounded-t-[22px] border-b border-solid border-b-[rgba(255,255,255,.15)] flex flex-col py-4 px-8 justify-between'>
        <h1 className='font-medium text-[27px] leading-[121%] text-white '>
          {headingText}
        </h1>
        <p className='capitalize font-normal text-[17px] leading-[121%] text-white'>
          are you ready to launch your converting landing pages with{' '}
          <span className='bg-gradient-add-domain-purple-text bg-clip-text text-transparent'>
            magic!
          </span>
        </p>
      </div>
      {children}
      <div className='w-full h-[100px] bg-[rgba(255,255,255,0.04);] rounded-b-[22px] flex items-center py-4 px-8 z-30'>
        <Link
          to={to}
          className='w-[300px] h-[58px] rounded-[10px] font-semibold text-xl leading-[58px] text-center bg-gradient-orange-text text-white'
          onClick={onClick}
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
};

export default Form;
