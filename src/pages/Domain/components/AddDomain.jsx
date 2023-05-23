import React from 'react';
import { Link } from 'react-router-dom';

const AddDomain = () => {
  return (
    <Link
      to='/domain/add_domain'
      className='flex justify-center items-center w-full h-[104px] gap-[33px] border-2 border-dashed border-[#ff6b00] bg-gradient-transparent-domain rounded-xl py-[19px] mb-[26px]'
    >
      <button className='bg-gradient-add-icon text-white font-normal text-[34px] leading-[67px] rounded-full w-[67px] h-[67px] text-center'>
        +
      </button>
      <h2 className='capitalize text-[rgba(255,255,255,.79)] font-normal text-[34px] leading-[121%] '>
        add new domain
      </h2>
    </Link>
  );
};

export default AddDomain;
