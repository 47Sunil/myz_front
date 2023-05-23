import React from 'react';
import styled from 'styled-components';
import CopyIcon from '../../assets/svg/CopyIcon';
import Eye from '../../assets/svg/Eye';
import Bin from '../../assets/svg/Bin';
import Notebook from '../../assets/svg/Notebook';
import { useQuery } from 'react-query';
import { useLandingTablesData } from '../../actions/LandingPage';

const HeaderCell = styled.th`
  background: rgba(229, 231, 235, 0.7);
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 26px;
  letter-spacing: 0.04em;
  font-weight: 500;
  color: #000;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  text-align: left;
  border: 1px solid rgb(209, 213, 219);
  &:first-child {
    border-left: none;
  }
  &:last-child {
    border-right: none;
  }
`;

const BodyRow = styled.tr`
  &:nth-child(odd) {
    background: #f7f7f7;
  }
`;

const BodyCell = styled.td`
  text-align: left;
  color: rgb(75, 85, 99);
  padding: 1rem 1rem;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.04em;
`;

const Tables = ({ pages, data }) => {
  return (
    <table className='w-full border-collapse mb-[41px]'>
      <tr>
        {data.map((i) => {
          return i.header.map((j) => {
            return <HeaderCell>{j}</HeaderCell>;
          });
        })}
      </tr>
      {data.map((i) => {
        return i.data.map((j) => {
          return (
            <BodyRow>
              <BodyCell>{j.orderId}</BodyCell>
              <BodyCell>{j.date}</BodyCell>
              <BodyCell>{j.status}</BodyCell>
              <BodyCell>{j.amount}</BodyCell>
              <BodyCell>{j.product}</BodyCell>
              <BodyCell>{j.customer}</BodyCell>
              <BodyCell>{j.actions}</BodyCell>
            </BodyRow>
          );
        });
      })}
    </table>
  );
};

const DomainTables = ({ pages, data }) => {
  return (
    <table className='w-full border-collapse mb-[41px]'>
      <tr>
        {data.map((i) => {
          return i.header.map((j) => {
            return <HeaderCell>{j}</HeaderCell>;
          });
        })}
      </tr>
      {data.map((i) => {
        return i.data.map((j) => {
          return (
            <BodyRow>
              <BodyCell>{j.domainName}</BodyCell>
              <BodyCell>{j.date}</BodyCell>
              <BodyCell>{j.status}</BodyCell>
              <BodyCell>{j.actions}</BodyCell>
            </BodyRow>
          );
        });
      })}
    </table>
  );
};

const LandingTables = ({ pages, headerData }) => {
  const { data, isLoading } = useQuery('LandingTables', useLandingTablesData);
  {
    !isLoading && console.log(data, 'landing pages table data');
  }
  return (
    <table className='w-full border-collapse mb-[41px]'>
      <tr>
        {headerData.map((i) => {
          return i.header.map((j) => {
            return <HeaderCell>{j}</HeaderCell>;
          });
        })}
      </tr>
      {!isLoading &&
        data?.data.map((i) => {
          return (
            <BodyRow>
              <BodyCell className='w-[300px]'>
                {' '}
                <div className='w-full text-sm text-gray-900 font-medium'>
                  <h2>{i.name}</h2>
                  <div className=' flex mt-1 bg-gray-200 rounded overflow-hidden relative'>
                    <p className='bg-gray-800 text-white py-1 px-2 text-xs'>
                      preview.{i.name}.io
                    </p>
                    <p className='text-gray-500 p-1 text-xs'>/preview</p>
                    <div className='absolute p-1 right-0'>
                      <CopyIcon />
                    </div>
                  </div>
                </div>
              </BodyCell>
              <BodyCell className='w-[150px]'>{i.createdAt}</BodyCell>
              <BodyCell className=' flex justify-center h-full mt-3'>
                <p className='bg-[rgba(255,107,0,0.23)] w-fit px-3 text-center border-2 border-dashed border-[#FA6A2C]'>
                  Draft
                </p>
              </BodyCell>
              <BodyCell className='!text-center'>3,456</BodyCell>
              <BodyCell className='w-[300px]'>
                <div className='flex gap-2 justify-center'>
                  <button className='bg-[#EFEFEF] border border-solid border-[#E0DBDB] rounded-[8px] text-[#494949] font-normal px-4 text-[15px]'>
                    Send to Draft
                  </button>
                  <button className='bg-[#EFEFEF] border border-solid border-[#E0DBDB] rounded-[8px] text-[#494949] font-normal px-1 text-[15px]'>
                    <Eye />
                  </button>
                  <button className='bg-[#EFEFEF] border border-solid border-[#E0DBDB] rounded-[8px] text-[#494949] font-normal px-1 text-[15px]'>
                    <Notebook />
                  </button>
                  <button className='bg-[#EFEFEF] border border-solid border-[#E0DBDB] rounded-[8px] text-[#494949] font-normal px-1 text-[15px]'>
                    <Bin />
                  </button>
                </div>
              </BodyCell>
            </BodyRow>
          );
        })}
    </table>
  );
};

export { Tables, DomainTables, LandingTables };
