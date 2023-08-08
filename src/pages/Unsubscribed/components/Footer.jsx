import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='w-[80%] mx-auto mt-16 mb-8 relative z-20 flex text-[#a5abb5] items-center justify-between'>
      <div className='flex gap-8 text-[20px]'>
        <p>Privacy Policy</p>
        <p>Terms ans Conditions</p>
        <p>Refund Policy</p>
      </div>
      <Link
        to='/accounts'
        className='flex items-center gap-4'
      >
        <div className='rounded-[17px] bg-[rgba(255,255,255,.11)] border border-[rgba(255,255,255,.5)] w-[3rem] h-[3rem] flex items-center justify-center'>
          <p className='text-white text-[20px]'>&#8826;</p>
        </div>
        <p className='text-white text-[20px]'>Go Back To Home</p>
      </Link>
    </div>
  );
};

export default Footer;
