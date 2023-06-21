import React from 'react';
import Banner from './components/Banner';
import AddDomain from './components/AddDomain';
import Table from './components/Table';
import { useParams } from 'react-router-dom';
import AddNewDomain from './components/AddNewDomain';

const Domain = () => {
  const { method } = useParams();

  return (
    <>
      {method === 'home' ? (
        <div className='z-[3333] relative'>
          <Banner />
          <AddDomain />
          <Table />
        </div>
      ) : (
        <AddNewDomain />
      )}
    </>
  );
};

export default Domain;
