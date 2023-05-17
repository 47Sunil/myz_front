import React from 'react';
import TransparentButton from '../../../components/TransparentButton/TransparentButton';
import Search from '../../../assets/svg/Search';
import FilterIcon from '../../../assets/svg/FilterIcon';

const Filter = () => {
  return (
    <div className='w-full flex justify-between items-center mb-[41px]'>
      <div className='w-[50%] flex items-center justify-between'>
        <TransparentButton
          buttonText={'All orders'}
          transparent={false}
          filterBtn={true}
        />
        <TransparentButton
          buttonText={'Paid'}
          transparent={true}
          filterBtn={true}
        />
        <TransparentButton
          buttonText={'Failed'}
          transparent={true}
          filterBtn={true}
        />
        <TransparentButton
          buttonText={'Partial'}
          transparent={true}
          filterBtn={true}
        />
      </div>
      <div className='w-[40%] flex justify-between items-center '>
        <div className='relative'>
          <input
            type='text'
            className='w-[306px] h-full border border-solid border-[rgba(255,255,255,.22)] rounded-lg bg-transparent px-4 py-1 text-white focus:outline-none focus:border-[rgba(255,255,255,1)]'
          />
          <Search />
        </div>
        <TransparentButton
          buttonText={'Filter'}
          transparent={true}
          filterBtn={true}
          icon={<FilterIcon />}
        />
      </div>
    </div>
  );
};

export default Filter;
