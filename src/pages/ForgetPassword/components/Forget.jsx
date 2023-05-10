import React, { useState } from 'react';
import logo from '../../../assets/logos/logo.png';
// import './index.css';
import UserIcon from '../../../assets/svg/User';

import PinkButton from '../../../components/PinkButton/PinkButton';
import { Link, useNavigate } from 'react-router-dom';
import GoToHomeBtn from '../../../components/BackToHome/BackToHome';
// import axios from '../../../utils/axios';
import styled from 'styled-components';
import bgForm from '../../../assets/images/signin_bg.png';
import ForgetForm from './ForgetForm';
const EmailValidator =
  "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";

const ForgetPasswordLeft = styled.div`
  border: 0.5px solid black;
  width: 40%;
  min-width: 600px;
  background-color: #1e1e1e;
  background-image: url(${bgForm});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

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
    <ForgetPasswordLeft>
      <div className='my-0 mx-auto w-[75%] '>
        <img
          className='logo_img'
          alt='logo'
          src={logo}
        />
        <div className='flex items-center mb-[3rem] gap-[0.5rem]'>
          <h1 className='font-semibold text-[40px] leading-[60px] text-white'>
            Forget Password 🫤
          </h1>
        </div>
        <ForgetForm />
      </div>
    </ForgetPasswordLeft>
  );
}

export default Forget;
