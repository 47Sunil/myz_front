import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import TextError from './TextError';
import GoToHomeBtn from '../../../components/BackToHome/BackToHome';
import { Link, useNavigate } from 'react-router-dom';
// import { emailRegex } from '../utils/constant';

import LockIcon from '../../../assets/svg/Lock';
import UserIcon from '../../../assets/svg/User';
import EyeOpenIcon from '../../../assets/svg/EyesOpen';
import EyeCloseIcon from '../../../assets/svg/EyesClose';

// import AuthService from '../services/auth.service';

// import '../styles/formstyles.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { addUser, removeUser } from '../store/userSlice';
import PinkButton from '../../../components/PinkButton/PinkButton';
// import { motion } from 'framer-motion';

const SignForm = () => {
  return (
    <Formik>
      <Form>
        <div className='mb-[1.6rem] flex flex-col'>
          <label
            className='font-normal text-[22px] leading-[33px] text-[rgba(255,255,255,0.82)] mb-[0.5rem]'
            htmlFor='email'
          >
            Email Address
          </label>
          <div className='relative'>
            <UserIcon />
            <Field
              type='email'
              id='email'
              name='email'
              className='font-medium leading-8 text-[#d9d9d9] text-xl bg-[rgba(255,255,255,0.05)] border-solid border border-[rgba(255,255,255,.1)] rounded-[13px] py-[.7rem] px-[2.8rem]'
            />
          </div>
        </div>
        <div className='mb-[1.6rem] flex flex-col'>
          <label
            className='font-normal text-[22px] leading-[33px] text-[rgba(255,255,255,0.82)] mb-[0.5rem]'
            htmlFor='password'
          >
            Password
          </label>
          <div className='relative'>
            <LockIcon />
            <Field
              type='password'
              id='password'
              name='password'
              className='font-medium leading-8 text-[#d9d9d9] text-xl bg-[rgba(255,255,255,0.05)] border-solid border border-[rgba(255,255,255,.1)] rounded-[13px] py-[.7rem] px-[2.8rem]'
            />
            <div>
              <EyeCloseIcon />
            </div>
          </div>
        </div>
        <div className='mb-[1.6rem] flex flex-row justify-between'>
          <div className='relative flex items-center gap-4'>
            <Field
              type='checkbox'
              name='rememberUser'
              id='rememberUser'
              className='bg-gradient-to-br from-[#FFC371] to-[#FF5F6D] appearance-none w-[15px] h-[15px] rounded-sm'
            />
            <label
              htmlFor='rememberUser'
              className='font-normal text-[22px] leading-[33px] text-[rgba(255,255,255,.82)] cursor-pointer'
            >
              Remember Me
            </label>
          </div>
          <Link>
            <span className='font-normal text-[22px] leading-[33px] text-[rgba(255,255,255,.82)] '>
              Forget Password
            </span>
          </Link>
        </div>
        <PinkButton text='Sign In' />
        <p className='mt-4 font-normal text-[22px] leading-8 text-[rgba(255,255,255,.82)]'>
          Don't have an account?{' '}
          <Link className='text-[#bd61ec]'>
            <span>Sign Up</span>
          </Link>
        </p>
        <GoToHomeBtn />
      </Form>
    </Formik>
  );
};

export default SignForm;
