import React from 'react';
import styled from 'styled-components';
import { transactionTableData } from '../../utils/Data/constant';

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

const Tables = ({ pages }) => {
  return (
    <table className='w-full border-collapse mb-[41px]'>
      <tr>
        {transactionTableData.map((i) => {
          return i.header.map((j) => {
            return <HeaderCell>{j}</HeaderCell>;
          });
        })}
      </tr>
      {transactionTableData.map((i) => {
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

export default Tables;
