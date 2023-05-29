import React, { useState } from 'react';
import styled from 'styled-components';
import CopyIcon from '../../assets/svg/CopyIcon';
import Eye from '../../assets/svg/Eye';
import Bin from '../../assets/svg/Bin';
import Notebook from '../../assets/svg/Notebook';
import { useQuery } from 'react-query';
import {
  useLandingPagesData,
  useLandingPublishPatchMutation,
  useLandingPublishPutMutation,
  useLandingTablesData,
  useLandingTablesMutation,
} from '../../actions/LandingPage';
import { useTransactionData } from '../../actions/Transaction';
import { useDomainData } from '../../actions/DomainPage';
import { Tooltip, IconButton } from '@mui/material';
import PageLoader from '../../pages/LandingPage/components/PageLoader';
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

const TransactionTable = ({ pages, headerData }) => {
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

const LandingTables = ({ pages, headerData }) => {
  // * fetching data for populating the table
  const { data, isLoading } = useQuery('LandingTables', useLandingTablesData);

  // * fetching data for page views for the table
  const pageViews = useQuery('PageViews', useLandingPagesData);

  const pageViewsData = !pageViews.isLoading && pageViews?.data?.data;

  {
    !pageViews.isLoading && console.log(pageViewsData, 'adaddaadad');
  }
  // * modifying the data when delete button is clicked
  const tableMutation = useLandingTablesMutation();
  const handleDeleteRow = async (id) => {
    await tableMutation.mutateAsync(id);
  };
  const handleClickDelete = (id) => {
    console.log(id, 'row id ');
    handleDeleteRow(id);
  };

  // * modifying the data when send to draft or send to publish is clicked
  // patch -- changes publish to true
  const tableDraftPatchMutation = useLandingPublishPatchMutation();
  const handlePublishPatch = async (id) => {
    (await tableDraftPatchMutation).mutateAsync({ id });
  };
  const handlePublishTrue = (id) => {
    console.log(id);
    handlePublishPatch(id);
  };
  // put -- changes publish to false
  const tableDraftPutMutation = useLandingPublishPutMutation();
  const handlePublishPut = async (id) => {
    (await tableDraftPutMutation).mutateAsync({ id });
  };
  const handlePublishFalse = (id) => {
    handlePublishPut(id);
  };
  // * handle copy url on button click
  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
  };

  {
    !isLoading && console.log(data, 'landing pages table data');
  }
  const pattern = /\/([^/]+)$/;
  return (
    <table className='w-full border-collapse mb-[41px]'>
      <tr>
        {headerData.map((i) => {
          return i.header.map((j) => {
            return <HeaderCell>{j}</HeaderCell>;
          });
        })}
      </tr>
      {isLoading ? (
        <PageLoader />
      ) : (
        data?.data.map((i, idx) => {
          return (
            <BodyRow>
              <BodyCell className='w-[300px]'>
                {' '}
                <div className='w-full text-sm text-gray-900 font-medium'>
                  <h2>{i.name}</h2>
                  <div className=' flex mt-1 bg-gray-200 rounded overflow-hidden relative w-fit'>
                    <p className='bg-gray-800 text-white py-1 px-2 text-xs'>
                      {i.url.split('/')[2]}
                    </p>
                    <p className='text-gray-500 p-1 text-xs overflow-hidden text-ellipsis w-[100px]'>
                      /{i.url.match(pattern)[1]}
                    </p>
                    <Tooltip title='Copy'>
                      <IconButton>
                        <button
                          className='absolute p-1 right-0'
                          onClick={() => handleCopy(i.url)}
                        >
                          <CopyIcon />
                        </button>
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
              </BodyCell>
              <BodyCell className='w-[150px]'>
                {convertDate(i.createdAt)}
              </BodyCell>
              <BodyCell className=' flex justify-center h-full mt-3'>
                {i.published ? (
                  <p className='bg-[#40ff003b] w-fit px-3 text-center border-2 border-dashed border-[#40ff00]'>
                    Publish
                  </p>
                ) : (
                  <p className='bg-[rgba(255,107,0,0.23)] w-fit px-3 text-center border-2 border-dashed border-[#FA6A2C]'>
                    Draft
                  </p>
                )}
              </BodyCell>
              <BodyCell className='!text-center'>{pageViewsData[idx]}</BodyCell>
              <BodyCell className='w-[300px]'>
                <div className='flex gap-2 justify-center'>
                  {i.published ? (
                    <button
                      className='bg-[#EFEFEF] border border-solid border-[#E0DBDB] rounded-[8px] text-[#494949] font-normal px-4 text-[15px]'
                      onClick={() => handlePublishFalse(i._id)}
                    >
                      Send to Draft
                    </button>
                  ) : (
                    <button
                      className='bg-[#EFEFEF] border border-solid border-[#E0DBDB] rounded-[8px] text-[#494949] font-normal px-4 text-[15px]'
                      onClick={() => handlePublishTrue(i._id)}
                    >
                      Send to Publish
                    </button>
                  )}
                  <button className='bg-[#EFEFEF] border border-solid border-[#E0DBDB] rounded-[8px] text-[#494949] font-normal px-1 text-[15px]'>
                    <Eye />
                  </button>
                  <button className='bg-[#EFEFEF] border border-solid border-[#E0DBDB] rounded-[8px] text-[#494949] font-normal px-1 text-[15px]'>
                    <Notebook />
                  </button>
                  <button
                    className='bg-[#EFEFEF] border border-solid border-[#E0DBDB] rounded-[8px] text-[#494949] font-normal px-1 text-[15px]'
                    onClick={() => handleClickDelete(i._id)}
                  >
                    <Bin />
                  </button>
                </div>
              </BodyCell>
            </BodyRow>
          );
        })
      )}
    </table>
  );
};

export { TransactionTable, DomainTables, LandingTables };
