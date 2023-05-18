import React, { useState } from 'react';
import Tables from '../../../components/Tables/Tables';
import Pagination from './Pagination';
import { transactionTableData } from '../../../utils/Data/constant';

const Table = () => {
  const [pages, setPages] = useState(5);
  return (
    <div className='bg-[rgba(255,255,255,1)] border border-solid border-[rgba(255,255,255,0.15)] min-h-full rounded-t-3xl w-full  flex flex-col justify-between overflow-hidden'>
      <div className='flex flex-row justify-between p-4'>
        <input
          placeholder='Search'
          className='bg-gray-200/80 rounded-lg border border-gray-300 w-64 h-10 flex items-center px-3 placeholder:text-gray-700 text-black text-sm'
        />
        <Pagination
          pages={pages}
          setPages={setPages}
        />
      </div>
      <Tables
        pages={pages}
        data={transactionTableData}
      />
    </div>
  );
};

export default Table;
