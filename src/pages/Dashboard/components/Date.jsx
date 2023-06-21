// import { useState } from 'react';
import ArrowIcon from '../../../assets/svg/Arrow';
import ArrowIcon2 from '../../../assets/svg/Arrow2';
// import DateRangePicker from 'tw-daterange';

const DateSection = () => {
  return (
    <div className='h-full flex items-center justify-between'>
      <div className='flex justify-between w-[24.875rem] items-center h-full'>
        <input
          type='date'
          id='start'
          name='plan-start'
          value='2023-03-29'
          min='2023-01-01'
          max='2029-12-31'
          className='h-full font-semibold text-[.85rem] uppercase text-black px-2 border-none rounded-lg'
        />
        <ArrowIcon />
        <input
          type='date'
          id='start'
          name='plan-start'
          value='2023-03-29'
          min='2023-01-01'
          max='2029-12-31'
          className='h-full font-semibold text-[.85rem] uppercase text-black px-2 border-none rounded-lg'
        />
      </div>

      <div className='h-full'>
        <button className='h-full bg-[rgba(1,1,1,.14)] border border-solid border-white rounded-lg font-semibold text-[16px] leading-6 uppercase p-[.5rem_1.25rem] text-white flex items-center gap-4'>
          View complete report <ArrowIcon2 />
        </button>
      </div>
    </div>
  );
};

export default DateSection;
