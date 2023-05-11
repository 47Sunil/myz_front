import React from 'react';
// import './index.css';
// import { Loaders } from '../Loader';

function PinkButton({ text }) {
  return (
    <div className='p-5'>
      <button className='font-semibold text-[30px] leading-[50px] text-white w-full bg-gradient-to-r from-[#f76f47] to-[#bd61ec] rounded-[13px] p-2 '>
        {text}
      </button>
    </div>
  );
}

export default PinkButton;
