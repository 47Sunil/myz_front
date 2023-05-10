import React, { useState } from 'react';
import logo from '../../../assets/logos/logo.png';
// import './index.css';
import UserIcon from '../../../assets/svg/User';

import PinkButton from '../../../components/PinkButton/PinkButton';
import { Link, useNavigate } from 'react-router-dom';
import GoToHomeBtn from '../../../components/BackToHome/BackToHome';
// import axios from '../../../utils/axios';

const EmailValidator =
  "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
function Forget() {
  const [email, setEmail] = useState('');
  const [isLoaderRunning, setIsLoaderRunning] = useState(false);
  //   const navigate = useNavigate();
  //   const nextHandler = () => {
  //     setIsLoaderRunning(true);
  //     axios
  //       .post('user/forgot-password', {
  //         email,
  //       })
  //       .then(
  //         (response) => {
  //           if (response.data.success) {
  //             navigate('/new-email');
  //           }
  //           setIsLoaderRunning(false);
  //         },
  //         (error) => {
  //           setIsLoaderRunning(false);
  //           navigate('/new-email');
  //         }
  //       );
  //   };

  //   const emailChangeHandler = (e) => {
  //     setEmail(e.target.value);
  //     console.log('Email hai', email);
  //   };

  return (
    <div className='relative flex w-screen h-screen overflow-hidden text-white'>
      <div className='absolute mx-20 w-[80%]'>
        <img
          className='logo_img'
          alt='logo'
          src={logo}
        />

        <h1 className='my-6 text-3xl font-bold'>Forget Password 😄</h1>
        <p className='mb-6'>Register Email Address </p>
        <div className='relative flex '>
          <UserIcon className=' absolute m-4 h-5 w-5' />
          <input
            className='font-medium leading-8 text-[#d9d9d9] text-xl bg-[rgba(255,255,255,0.05)] border-solid border border-[rgba(255,255,255,.1)] rounded-[13px] py-[.7rem] px-[2.8rem]'
            size='30'
            type='email'
          />
        </div>
        <PinkButton
          style='mt-12 text-center'
          text={'Next'}
        />
        <div className='mt-4 flex justify-between '>
          <p>
            Don't have a account ?{' '}
            <Link className='hover:underline'>Sign up</Link>{' '}
          </p>
          <Link to='/account/login'>
            <p>Back to Login</p>
          </Link>
        </div>
        <GoToHomeBtn />
      </div>
    </div>
  );
}

export default Forget;
