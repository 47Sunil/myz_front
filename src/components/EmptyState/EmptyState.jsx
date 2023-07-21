import React from 'react';
import NoData from '../../assets/icons/Items.png';

const EmptyState = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <img
        src={NoData}
        alt='no data'
      />
      <p className='text-[#170F2F] text-[16px] font-semibold'>
        No Data Avaible to Show
      </p>
    </div>
  );
};

export default EmptyState;
