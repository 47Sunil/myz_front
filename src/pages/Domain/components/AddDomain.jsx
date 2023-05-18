import React from 'react';
import styled from 'styled-components';

const BorderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 104px;
  gap: 33px;
  border: dashed;
  border-width: 2px;
  border-color: #ff6b00;
  border-image-slice: 1;
`;

const AddDomain = () => {
  return (
    <BorderDiv className='bg-gradient-transparent-domain rounded-xl py-[19px] mb-[26px]'>
      <div className='bg-gradient-add-icon text-white font-normal text-[34px] leading-[67px] rounded-full w-[67px] h-[67px] text-center'>
        +
      </div>
      <h2 className='capitalize text-[rgba(255,255,255,.79)] font-normal text-[34px] leading-[121%] '>
        add new domain
      </h2>
    </BorderDiv>
  );
};

export default AddDomain;
