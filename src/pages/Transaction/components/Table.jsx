import React, { useState } from 'react';
import { TransactionTable } from '../../../components/Tables/Tables';
import Pagination from './Pagination';
import { transactionTableData } from '../../../utils/Data/constant';
import { useQuery, useQueryClient } from 'react-query';
import { useTransactionData } from '../../../actions/Transaction';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { useEffect } from 'react';

const Table = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState('');
  const [length, setLength] = useState('');
  const [search, setSearch] = useState('');
  const { data, isLoading, refetch, isRefetching } = useTransactionData(
    page,
    search
  );
  console.log(data);
  const handleSearchTemplate = (e) => {
    if (e.target.value !== '') {
      setSearch(e.target.value);
      setTimeout(() => {
        refetch();
      }, 1000);
    } else {
      setSearch('');
      refetch();
    }
  };
  // const queryClient = useQueryClient();
  // const { length } = queryClient.getQueryData(['transactions', page]);
  return (
    <div className='bg-[rgba(255,255,255,1)] border border-solid border-[rgba(255,255,255,0.15)] min-h-full rounded-t-3xl w-full  flex flex-col justify-between overflow-hidden'>
      <div className='flex flex-row justify-between p-4'>
        <input
          placeholder='Search'
          className='bg-gray-200/80 rounded-lg border border-gray-300 w-64 h-10 flex items-center px-3 placeholder:text-gray-700 text-black text-sm'
          onChange={handleSearchTemplate}
        />
        {/* <Pagination
          pages={pages}
          setPages={setPages}
        /> */}
        <div className=' w-[15rem] h-full flex items-center gap-2 text-black'>
          <p className='text-[12px]'>
            Showing {data?.data?.length} of <span>{data?.TotalOrders}</span>
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
              if (Math.ceil(data?.TotalOrders / 10)) {
                setPage((old) => old + 1);
              }
            }}
            disabled={page === Math.ceil(data?.TotalOrders / 10)}
          >
            <GrFormNext />
          </button>
        </div>
      </div>
      <TransactionTable
        page={page}
        setLength={setLength}
        setTotalPages={setTotalPages}
        headerData={transactionTableData}
        data={data}
        isLoading={isLoading || isRefetching}
      />
    </div>
  );
};

export default Table;
