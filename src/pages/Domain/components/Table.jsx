import React, { useState } from 'react';
import { DomainTables } from '../../../components/Tables/Tables';
import { domainTableData } from '../../../utils/Data/constant';
import { useDomainData } from '../../../actions/DomainPage';
import { useQuery, useQueryClient } from 'react-query';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const Table = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState('');
  const [length, setLength] = useState('');

  return (
    <div className='bg-[rgba(255,255,255,1)] border border-solid border-[rgba(255,255,255,0.15)] min-h-full rounded-t-3xl w-full  flex flex-col justify-between overflow-hidden'>
      <div className=' w-full h-full flex justify-end items-center gap-2 text-black p-2'>
        <p className='text-[12px]'>
          Showing {length} of <span>{totalPages}</span>
        </p>
        <button
          className='w-[3rem] bg-[rgba(0,0,0,.5)] h-full rounded-xl flex justify-center items-center text-[25px]'
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          <GrFormPrevious />
        </button>
        <button
          className='w-[3rem] bg-[rgba(0,0,0,.5)] h-full rounded-xl flex justify-center items-center text-[25px]'
          onClick={() => {
            if (Math.ceil(totalPages / 10)) {
              setPage((old) => old + 1);
            }
          }}
          disabled={page === Math.ceil(totalPages / 10)}
        >
          <GrFormNext />
        </button>
      </div>
      <DomainTables
        page={page}
        setTotalPages={setTotalPages}
        headerData={domainTableData}
        setLength={setLength}
      />
    </div>
  );
};

export default Table;
