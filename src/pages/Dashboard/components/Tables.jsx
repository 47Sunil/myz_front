import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { useCountryData, useTopSellingData } from '../../../actions/Dashboard';
const BodyRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #9b91b6;
  }
`;
export const CountryTables = ({ heading }) => {
  const { data, isLoading } = useQuery('country', useCountryData);
  {
    !isLoading && console.log(data, 'country data');
  }
  return (
    <div className='w-full h-full bg-[#1E222D] gap-[20px] rounded-2xl max-h-[24rem] pt-8 max-w-[570px] flex  items-center flex-col shadow-[inset_3px_3px_25px_#2d333d] border border-solid border-[#909094]'>
      <div className='w-full'>
        <span className='text-[#BDB9B9] border border-[#BDB9B9] rounded-lg text-xl  p-2 ml-[50px] font-semibold'>
          {heading}
        </span>
      </div>
      <div className='w-full px-4'>
        <table className='w-full border-collapse text-center text-white text-[14px]'>
          {!isLoading &&
            Object.entries(data?.data).map(([country, value]) => {
              return (
                <BodyRow>
                  <td className='py-1'>icon</td>
                  <td className=' py-1 text-left px-2 border-x border-solid border-[#9B91B6]'>
                    {country}
                  </td>
                  <td className='py-1 text-left px-2'>{value}</td>
                </BodyRow>
              );
            })}
        </table>
      </div>
    </div>
  );
};
export const TopSellingTables = ({ heading }) => {
  const { data, isLoading } = useQuery('top_selling', useTopSellingData);
  {
    !isLoading && console.log(data, 'top selling data');
  }
  return (
    <div className='w-full h-full bg-[#1E222D] gap-[20px] rounded-2xl max-h-[24rem] pt-8 max-w-[570px] flex  items-center flex-col shadow-[inset_3px_3px_25px_#2d333d] border border-solid border-[#909094]'>
      <div className='w-full'>
        <span className='text-[#BDB9B9] border border-[#BDB9B9] rounded-lg text-xl  p-2 ml-[50px] font-semibold'>
          {heading}
        </span>
      </div>
      <div className='w-full px-4'>
        <table className='w-full border-collapse text-center text-white text-[14px]'>
          {!isLoading &&
            data?.data.map((i) => {
              return (
                <BodyRow>
                  <td className='py-1'>icon</td>
                  <td className=' py-1 text-left px-2 border-x border-solid border-[#9B91B6]'>
                    {i.productName}
                  </td>
                  <td className='py-1 text-left px-2'>{i.price}</td>
                </BodyRow>
              );
            })}
        </table>
      </div>
    </div>
  );
};
