import React from 'react';
import styled from 'styled-components';
import BackButton from '../../assets/icons/left_arrow.png';
const Button = styled.button`
  margin: 1.5rem 0rem;
  height: 57px;
  width: 57px;
  background: url(${BackButton});
  background-position: center;
  background-repeat: no-repeat;
  border: none;
`;

const GoToHomeBtn = () => {
  return (
    <div className='flex items-center gap-4 my-[2.5rem] mx-0'>
      <Button />
      <p className='font-normal text-[22px] leading-[33px] text-[rgba(255,255,255,0.82)] mb-[0.5rem]'>
        Go back to Home
      </p>
    </div>
  );
};

export default GoToHomeBtn;
