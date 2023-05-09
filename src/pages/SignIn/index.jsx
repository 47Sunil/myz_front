import React, { useState } from 'react';
import SignInForm from './components/SignInForm';
import FormRight from '../../components/FormRight/FormRight';
import logo from '../../assets/logos/logo.png';
import rocket from '../../assets/icons/icon_rocket.png';
import bgForm from '../../assets/images/signin_bg.png';
import { RiAlertFill } from 'react-icons/ri';
import styled from 'styled-components';
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
  const [isError, setIsError] = useState(false);
  return (
    <div className='relative flex w-screen h-screen overflow-hidden'>
      <SignInLeft className='overflow-y-scroll'>
        <div className='my-0 mx-auto w-[75%] '>
          <img
            className='logo_img'
            alt='logo'
            src={logo}
          />
          <div>
            <div className='flex items-center mb-[3rem] gap-[0.5rem]'>
              <h2 className='font-semibold text-[40px] leading-[60px] text-white'>
                Sign In
              </h2>
              <img
                className='h-[40px] w-[40px]'
                src={rocket}
                alt='rocket'
              />
            </div>
            {/* {isError && (
              <div className='mb-4 flex  items-center border-2 border-dashed border-red-500 text-justify text-red-500 '>
                <RiAlertFill size={34} />{' '}
                <span className='ml-2'>
                  Something went wrong with account configuration
                </span>
              </div>
            )} */}

            <SignInForm />
          </div>
        </div>
      </SignInLeft>
      <FormRight />
    </div>
  );
};

export default SignIn;
