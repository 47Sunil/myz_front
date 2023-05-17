import React from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import Table from './components/Table';

const Transaction = () => {
  return (
    <div className='p-[1.188rem_2.813rem_1.375rem_2.313rem] z-[33333] relative w-full h-[calc(100vh-50px)]'>
      <Header />
      <Filter />
      <hr className='border-[rgba(255,255,255,.15)] mb-[41px]' />
      <Table />
    </div>
  );
};

export default Transaction;
