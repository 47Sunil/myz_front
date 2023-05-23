import React from 'react';
import styled from 'styled-components';
import CopyIcon from '../../assets/svg/CopyIcon';
import Eye from '../../assets/svg/Eye';
import Bin from '../../assets/svg/Bin';
import Notebook from '../../assets/svg/Notebook';
import { useTransactionData } from '../../actions/Transaction';
import { useDomainData } from '../../actions/DomainPage';
import { useQuery } from 'react-query';

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
const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
function convertDate(date) {
  const newFormatDate = new Date(date);
  const day = newFormatDate.getDate().toString().padStart(2, '0');
  const monthIndex = newFormatDate.getMonth();
  const year = newFormatDate.getFullYear().toString();
  const monthAbbreviation = monthNames[monthIndex];
  const formattedDate = `${day} ${monthAbbreviation} ${year}`;
  return formattedDate;
}
const Tables = ({ pages, headerData }) => {
  const { data, isLoading } = useQuery('transactions', useTransactionData);
  {
    !isLoading && console.log(data?.data);
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
              <BodyCell>
                <div className='text-ellipsis w-[100px] whitespace-nowrap overflow-hidden'>
                  {!isLoading && i?._id}
                </div>
              </BodyCell>
              <BodyCell>{convertDate(i?.createdAt)}</BodyCell>
              <BodyCell>{!isLoading && i?.order_status}</BodyCell>
              <BodyCell>{!isLoading && i?.metadata?.product?.price}</BodyCell>
              <BodyCell>{!isLoading && i?.metadata?.product?.name}</BodyCell>
              <BodyCell>{!isLoading && i?.metadata?.customer?.name}</BodyCell>
              <BodyCell>{!isLoading && i?.actions}</BodyCell>
            </BodyRow>
          );
        })}
    </table>
  );
};

const DomainTables = ({ pages, headerData }) => {
  const { data, isLoading } = useQuery('domains', useDomainData);
  {
    !isLoading && console.log(data, 'domain table data');
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
              <BodyCell>{!isLoading && i.domain_name}</BodyCell>
              <BodyCell>{!isLoading && convertDate(i.createdAt)}</BodyCell>
              <BodyCell>{!isLoading && i.metadata.status}</BodyCell>
              <BodyCell>{!isLoading && i.actions}</BodyCell>
            </BodyRow>
          );
        })}
    </table>
  );
};

const LandingTables = ({ pages, data }) => {
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
              <BodyCell className='w-[300px]'>
                {' '}
                <div className='w-full text-sm text-gray-900 font-medium'>
                  <h2>Agency Workshop Landing Page</h2>
                  <div className=' flex mt-1 bg-gray-200 rounded overflow-hidden relative'>
                    <p className='bg-gray-800 text-white py-1 px-2 text-xs'>
                      preview.myzer.io
                    </p>
                    <p className='text-gray-500 p-1 text-xs'>/preview</p>
                    <div className='absolute p-1 right-0'>
                      <CopyIcon />
                    </div>
                  </div>
                </div>
              </BodyCell>
              <BodyCell className='w-[150px]'>{j.date}</BodyCell>
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
        });
      })}
    </table>
  );
};

export { Tables, DomainTables, LandingTables };
