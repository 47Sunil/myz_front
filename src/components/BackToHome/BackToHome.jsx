import React from 'react';
import styled from 'styled-components';
import BackButton from '../../assets/icons/left_arrow.png';
import { useNavigate } from 'react-router-dom';
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

const GoToHomeBtn = ({ text, gobackLink }) => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center gap-4 z-50 relative'>
      <Button
        onClick={() => navigate(gobackLink)}
        className='cursor-pointer z-50 relative'
      />
      <p
        className='font-normal text-[20px]  text-[rgba(255,255,255,0.82)] cursor-pointer'
        onClick={() => navigate(gobackLink)}
      >
        {text}
      </p>
    </div>
  );
};

export default GoToHomeBtn;
