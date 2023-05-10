import React, { useState } from 'react';
import logo from '../../assets/logos/logo.png';
import rocket from '../../assets/icons/icon_rocket.png';
import SignUpForm from './components/SignUpForm';
import FormRight from '../../components/FormRight/FormRight';
import styled from 'styled-components';
import bgForm from '../../assets/images/signin_bg.png';
// import { TopError } from './';
// import { motion } from 'framer-motion';
// import { useSelector } from 'react-redux';
const SignUpLeft = styled.div`
  border: 0.5px solid black;
  width: 40%;
  min-width: 600px;
  background-color: #1e1e1e;
  background-image: url(${bgForm});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const SignUp = () => {
  return (
    <>
      <div className='relative flex w-screen h-screen overflow-hidden'>
        <SignUpLeft className='overflow-y-scroll'>
          <div className='my-0 mx-auto w-[75%] '>
            <img
              className='logo_img'
              alt='logo'
              src={logo}
            />
            <div>
              <div className='flex items-center mb-[3rem] gap-[0.5rem]'>
                <h2 className='font-semibold text-[40px] leading-[60px] text-white'>
                  Sign Up
                </h2>
                <img
                  className='h-[40px] w-[40px]'
                  src={rocket}
                  alt='rocket'
                />
              </div>
              <SignUpForm />
            </div>
          </div>
        </SignUpLeft>
        <FormRight />
      </div>
    </>
  );
};

export default SignUp;
