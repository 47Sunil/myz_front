import React from 'react';
import Banner from './components/Banner';
import AddDomain from './components/AddDomain';
import Table from './components/Table';

const Domain = () => {
  return (
    <div className='z-[3333] relative'>
      <Banner />
      <AddDomain />
      <Table />
    </div>
  );
};

export default Domain;
