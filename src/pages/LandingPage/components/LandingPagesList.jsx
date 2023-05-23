import React from 'react';

const LandingPagesList = () => {
  return (
    <>
      <div className=''>
        <div className='header-row flex flex-row gap-4'>
          <div className='w-3/12 bg-white/10 py-2 px-4 text-sm text-white rounded-md'>
            Name
          </div>
          <div className='w-2/12 bg-white/10 py-2 px-4 text-sm text-white rounded-md text-center'>
            Date
          </div>
          <div className='w-2/12 bg-white/10 py-2 px-4 text-sm text-white rounded-md text-center'>
            Status
          </div>
          <div className='w-2/12 bg-white/10 py-2 px-4 text-sm text-white rounded-md text-center'>
            Page Views
          </div>
          <div className='w-3/12 bg-white/10 py-2 px-4 text-sm text-white rounded-md text-center'>
            Action
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPagesList;
