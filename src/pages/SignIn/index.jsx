import React, { useState } from 'react';
import SignInForm from './components/SignInForm';
import FormRight from '../../components/FormRight/FormRight';
import logo from '../../assets/logos/logo.png';
import rocket from '../../assets/icons/icon_rocket.png';
import bgForm from '../../assets/images/signin_bg.png';
import styled from 'styled-components';
import FormLeft from '../../components/FormLeft/FormLeft';
import Account from '../Accounts/Accounts';

const SignInLeft = styled.div`
  border: 0.5px solid black;
  width: 40%;
  min-width: 600px;
  background-color: #1e1e1e;
  background-image: url(${bgForm});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const SignIn = () => {
  // const isOtpScreen = {};
  return (
    // <div className='relative flex w-screen h-screen overflow-hidden'>
    //   <SignInLeft className=''>
    // <FormLeft
    //   logo={logo}
    //   heading={'Sign In'}
    //   headingIcon={rocket}
    //   isOtpScreen={isOtpScreen}
    // >
    //   <SignInForm />
    // </FormLeft>
    //   </SignInLeft>
    //   <FormRight />
    // </div>
    <div className=''>
      <div className='flex items-center mb-[2rem] gap-[0.5rem]'>
        <h1 className='font-semibold text-[35px] leading-[60px] text-white px-5'>
          Sign In{' '}
        </h1>
        <img
          src={rocket}
          alt='rocket'
          className='h-[40px] w-[40px]'
        />
      </div>
      <SignInForm />
    </div>
  );
};

export default SignIn;
