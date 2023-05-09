import React from 'react';
// import './index.css';
// import { Loaders } from '../Loader';

function PinkButton({ text }) {
  return (
    <button className='font-semibold text-[33px] leading-[50px] text-white w-full bg-gradient-to-r from-[#f76f47] to-[#bd61ec] rounded-[13px] p-[.8rem] '>
      {text}
    </button>
  );
}

export default PinkButton;
