import React from 'react';
import Noodles from '../../assets/svg/Noodles';
import bg1 from '../../assets/images/signInRightBg.png';
import styled from 'styled-components';

const FormRightBg = styled.div`
  background-image: url(${bg1});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  width: 60%;
  min-width: 900px;
  background-color: #0a1118;
  position: relative;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.24);
  }
`;

const SignupRightHalf = () => {
  return (
    <FormRightBg>
      <div>
        <div className='relative'>
          <p className='font-semibold text-[33px] leading-[50px] text-white mt-20 mr-0 mb-4 ml-16'>
            Get Landing Page{' '}
            <span className='bg-gradient-to-r  from-[#f76f47] to-[#bd61ec] bg-clip-text fill-transparent'>
              Served
            </span>{' '}
            Before <br />
            Your Favorite Noodles
          </p>
          <ul className='font-medium text-[22px] leading-[33px] text-[#c0c0c0] ml-[4.5rem] list-none'>
            <ListItem>One Click Template Selection</ListItem>
            <ListItem>Automated Copywriting</ListItem>
            <ListItem>Performance Optimization</ListItem>
          </ul>
          <Noodles />
        </div>
      </div>
    </FormRightBg>
  );
};

export default SignupRightHalf;
