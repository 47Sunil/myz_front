import React, { useState } from 'react';
import SignInForm from './components/SignInForm';
import FormRight from '../../components/FormRight/FormRight';
import logo from '../../assets/logos/logo.png';
import rocket from '../../assets/icons/icon_rocket.png';
import bgForm from '../../assets/images/signin_bg.png';
import styled from 'styled-components';
import FormLeft from '../../components/FormLeft/FormLeft';

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
  return (
    <div className='relative flex w-screen h-screen overflow-hidden'>
      <SignInLeft className=''>
        <FormLeft
          logo={logo}
          heading={'Sign In'}
          headingIcon={rocket}
          form={<SignInForm />}
        />
      </SignInLeft>
      <FormRight />
    </div>
  );
};

export default SignIn;
