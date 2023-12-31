import React from 'react';
import checkIcon from '../../../assets/icons/icons8-check-30.png';
import styled from 'styled-components';

const Checkbox = styled.input`
  appearance: none;
  position: relative;
  width: 15px;
  height: 15px;
  border-radius: 5px;
  background: #f8f7f7;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 10px;
  &:checked {
    background: linear-gradient(140deg, #ffc371, #ff5f6d);
  }
  &:before {
    content: '';
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image: url(${checkIcon});
    background-size: contain;
    background-repeat: no-repeat;
    display: none;
  }
  &:checked:before {
    display: block;
  }
`;
const RememberMe = ({ loginRequest, setLoginRequest }) => {
  return (
    <div className='flex items-center gap-2'>
      {' '}
      <Checkbox
        type='checkbox'
        onChange={() =>
          setLoginRequest((prevState) => ({
            ...prevState,
            rememberMe: !loginRequest,
          }))
        }
      />
      <label
        htmlFor='rememberUser'
        className='font-normal text-[20px] leading-[33px] text-[rgba(255,255,255,.82)] cursor-pointer'
      >
        Remember Me
      </label>
    </div>
  );
};

export default RememberMe;
