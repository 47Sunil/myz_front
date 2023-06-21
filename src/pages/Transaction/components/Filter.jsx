import React from 'react';
// import TransparentButton from '../../../components/TransparentButton/TransparentButton';
// import Search from '../../../assets/svg/Search';
// import FilterIcon from '../../../assets/svg/FilterIcon';
// import { filterData } from '../../../utils/Data/constant';

const Filter = () => {
  return (
    <div className='w-full flex justify-between items-center mb-[41px] relative'>
      {/* <div className='bg-gradient-filter-right absolute left-0 h-full w-[100px] rounded-[8px]'></div>
      <div className='bg-gradient-filter-left absolute left-[24%] h-full w-[100px] rounded-[8px]'></div> */}
      <div className='w-[50%] flex items-center gap-4  rounded-[8px] bg-clip-content'>
        {/* {filterData.map((i, idx) => (
          <TransparentButton
            buttonText={i}
            transparent={true}
            filterBtn={true}
          />
        ))} */}
        {/* <TransparentButton
          buttonText={'All orders'}
          transparent={false}
          filterBtn={true}
          active={true}
        /> */}
        {/* <TransparentButton
          buttonText={'Paid'}
          transparent={true}
          filterBtn={true}
          active={true}
        />
        <TransparentButton
          buttonText={'Failed'}
          transparent={true}
          filterBtn={true}
          active={true}
        />
        <TransparentButton
          buttonText={'Partial'}
          transparent={true}
          filterBtn={true}
          active={true}
        /> */}
      </div>
      {/* <TransparentButton
        buttonText={'Filter'}
        transparent={true}
        filterBtn={true}
        icon={<FilterIcon />}
      /> */}
    </div>
  );
};

export default Filter;
