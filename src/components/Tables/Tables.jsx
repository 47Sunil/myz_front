import React from 'react';
import styled from 'styled-components';
const HeaderCell = styled.th`
  background: rgba(255, 255, 255, 0.22);
  border-radius: 7px;
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.65);
  padding-block: 0.5rem;
`;

const BodyRow = styled.tr`
  border-collapse: collapse;
`;

const BodyCell = styled.td`
  background: white;
  &:first-child {
    border-radius: 7px 0 0 7px;
  }
  &:last-child {
    border-radius: 0 7px 7px 0;
  }
  color: #565656;
`;

const Tables = () => {
  return (
    <table className='w-full'>
      <tr>
        <HeaderCell>Order Id</HeaderCell>
        <HeaderCell>Date</HeaderCell>
        <HeaderCell>Status</HeaderCell>
        <HeaderCell>Amount</HeaderCell>
        <HeaderCell>Product</HeaderCell>
        <HeaderCell>Customer</HeaderCell>
        <HeaderCell>Actions</HeaderCell>
      </tr>
      <tbody>
        <BodyCell>xyz</BodyCell>
        <BodyCell>xyz</BodyCell>
        <BodyCell>xyz</BodyCell>
        <BodyCell>xyz</BodyCell>
        <BodyCell>xyz</BodyCell>
        <BodyCell>xyz</BodyCell>
        <BodyCell>xyz</BodyCell>
      </tbody>
    </table>
  );
};

export default Tables;
