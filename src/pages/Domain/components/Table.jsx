import React from 'react';
import { DomainTables } from '../../../components/Tables/Tables';
import { domainTableData } from '../../../utils/Data/constant';
import { useDomainData } from '../../../actions/DomainPage';
import { useQuery } from 'react-query';
const Table = () => {
  return (
    <div className='bg-[rgba(255,255,255,1)] border border-solid border-[rgba(255,255,255,0.15)] min-h-full rounded-t-3xl w-full  flex flex-col justify-between overflow-hidden'>
      <DomainTables headerData={domainTableData} />
    </div>
  );
};

export default Table;
