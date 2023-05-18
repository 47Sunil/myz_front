import React from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import Table from './components/Table';

const Transaction = () => {
  return (
    <div className='z-[33333] relative w-full'>
      <Header />
      <Filter />
      <hr className='border-[rgba(255,255,255,.15)] mb-[41px]' />
      <Table />
    </div>
  );
};

export default Transaction;
