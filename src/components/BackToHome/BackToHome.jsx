import React from 'react';
import styled from 'styled-components';
import BackButton from '../../assets/icons/left_arrow.png';
const Button = styled.button`
  margin: 1.5rem 0rem;
  height: 45px;
  width: 45px;
  background: url(${BackButton});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
`;

const GoToHomeBtn = () => {
  return (
    <div className='flex items-center gap-4 px-5 pb-5'>
      <Button />
      <p className='font-normal text-[20px]  text-[rgba(255,255,255,0.82)]'>
        Go back to Home
      </p>
    </div>
  );
};

export default GoToHomeBtn;
