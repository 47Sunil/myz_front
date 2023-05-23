import React from 'react';
import linebold from '../../../assets/icons/line-bold.png';
import linemed from '../../../assets/icons/line-med.png';
import linelight from '../../../assets/icons/line-light.png';
import mesh from '../../../assets/icons/mesh-banner.png';
import IconDomain from '../../../assets/svg/IconDomain';
const Banner = () => {
  return (
    <div className='flex gap-4 mb-[28px]'>
      <div className='w-full h-[133px] rounded-2xl bg-gradient-banner-domain-purple relative overflow-hidden'>
        <img
          src={linebold}
          alt=''
          className='absolute'
        />
        <img
          src={linemed}
          alt=''
          className='absolute'
        />
        <img
          src={linelight}
          alt=''
          className='absolute'
        />
        <img
          src={mesh}
          alt=''
          className='absolute right-0'
        />
        <div className='flex gap-8 items-center z-10 relative p-2'>
          <div className=''>
            <IconDomain />
          </div>
          <h1 className='capitalize font-barlow text-white font-bold leading-[121%] text-[35px] '>
            get super{' '}
            <span className='bg-gradient-banner-text-orange bg-clip-text text-transparent'>
              freedom
            </span>{' '}
            with your name on your myzer pages
          </h1>
        </div>
      </div>
      <div className='w-full h-[133px] rounded-2xl bg-gradient-banner-domain-orange relative overflow-hidden'>
        <img
          src={linebold}
          alt=''
          className='absolute'
        />
        <img
          src={linemed}
          alt=''
          className='absolute'
        />
        <img
          src={linelight}
          alt=''
          className='absolute'
        />
        <img
          src={mesh}
          alt=''
          className='absolute right-0'
        />
        <div className='flex justify-center items-center w-full h-full p-5 z-10 relative'>
          <h1 className='capitalize font-barlow text-black font-bold leading-[121%] text-[35px] '>
            purchase a{' '}
            <span className='bg-gradient-banner-text-purple bg-clip-text text-transparent'>
              premium domain
            </span>{' '}
            for your brand
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
