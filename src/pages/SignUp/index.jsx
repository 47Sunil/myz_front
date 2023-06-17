import React, { useState } from 'react';
import logo from '../../assets/logos/logo.png';
import rocket from '../../assets/icons/icon_rocket.png';
import SignUpForm from './components/SignUpForm';
import FormRight from '../../components/FormRight/FormRight';
import styled from 'styled-components';
import bgForm from '../../assets/images/signin_bg.png';
import FormLeft from '../../components/FormLeft/FormLeft';
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
        <SignUpLeft className='overflow-hidden'>
          <FormLeft
            logo={logo}
            heading={'Sign Up'}
            headingIcon={rocket}
            form={<SignUpForm />}
          />
        </SignUpLeft>
        <FormRight />
      </div>
    </>
  );
};

export default SignUp;
