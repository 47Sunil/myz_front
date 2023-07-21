import React from 'react';
import { Oval } from 'react-loader-spinner';
// import './index.css';
// import { Loaders } from '../Loader';

function PinkButton({ text, lock }) {
  return (
    <div className='p-5 '>
      <button
        type='submit'
        className={
          !lock
            ? 'font-semibold text-[30px] leading-[50px] text-white w-full bg-gradient-to-r from-[#f76f47] to-[#bd61ec] rounded-[13px] p-2 '
            : 'font-semibold text-[30px] leading-[50px] text-white w-full bg-gradient-to-r from-[#622a19] to-[#49235d] rounded-[13px] p-2 flex items-center justify-center gap-2'
        }
        disabled={lock}
      >
        {text}
        {lock && (
          <Oval
            height={30}
            width={30}
            color='#fff'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor='#fff'
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        )}
      </button>
    </div>
  );
}

export default PinkButton;
