import React from 'react';
import { transactionTableData } from '../../../utils/Data/constant';

const Pagination = ({ pages, setPages }) => {
  function handleChange(e) {
    const value = e;
    setPages((oldVal) => (oldVal = value));
  }
  const totalPages = transactionTableData.map((i) => {
    return i.data.length;
  });
  return (
    <div className='flex gap-4 text-center items-center justify-center text-sm'>
      <label htmlFor='pages'>Showing</label>
      <select
        value={pages}
        name='pages'
        id='pages'
        onChange={(e) => handleChange(e.target.value)}
        className='bg-[#f2f2f2] border border-soild border-[#d9d9d9] px-2 py-1 rounded-md'
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
      </select>
      <label htmlFor='pages'>
        of <span className='font-semibold'>{totalPages} Results</span>
      </label>
    </div>
  );
};

export default Pagination;
