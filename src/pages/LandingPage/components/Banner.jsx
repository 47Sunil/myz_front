import React from 'react';
import banner_logo_1 from '../../../assets/icons/banner1_landingpage.png';
import banner_logo_2 from '../../../assets/icons/banner2_landingpage.png';
import mesh from '../../../assets/icons/mesh-banner.png';
import lines from '../../../assets/icons/lines.png';
const Banner = () => {
  return (
    <div className='lg:flex hidden lg:items-stretch lg:flex-row min-h-[8rem] gap-[1rem] mb-4 w-full'>
      <div className='bg-gradient-landing-purple h-full w-full rounded-[9px]'>
        <div className='flex gap-8 p-4 items-center h-full w-full relative'>
          <img
            src={lines}
            alt=''
            className='absolute left-[6rem]'
          />
          <img
            src={mesh}
            alt=''
            className='absolute right-0'
          />
          <img
            src={banner_logo_1}
            alt=''
          />
          <h1 className='capitalize text-white font-bold text-[35px] font-barlow leading-[121%] z-10'>
            now generate AI powered landing pages with{' '}
            <span className='bg-gradient-orange-text bg-clip-text text-transparent'>
              myzer
            </span>
          </h1>
        </div>
      </div>
      <div className='bg-gradient-landing-orange w-full rounded-[9px]'>
        <div className='flex gap-8 p-4 items-center h-full w-full relative'>
          <img
            src={lines}
            alt=''
            className='absolute left-[4.5rem]'
          />
          <img
            src={mesh}
            alt=''
            className='absolute right-0'
          />
          <img
            src={banner_logo_2}
            alt=''
            className='z-[10]'
          />
          <h1 className='capitalize text-white font-bold text-[35px] font-barlow leading-[121%] z-10'>
            <span className='bg-gradient-landing-text-purple bg-clip-text text-transparent'>
              100+
            </span>{' '}
            Pre-made Designs For Everyone
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
