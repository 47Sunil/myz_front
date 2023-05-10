import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import LockIcon from '../../../assets/svg/Lock';
import UserIcon from '../../../assets/svg/User';
import MailIcon from '../../../assets/svg/Mail';
import PhoneIcon from '../../../assets/svg/Phone';
import GoToHomeBtn from '../../../components/BackToHome/BackToHome';
import { Link } from 'react-router-dom';
// import { emailRegex } from '../utils/constant';
// import { useNavigate } from 'react-router-dom';

// import AuthService from '../services/auth.service.js';
import { countryCode } from '../../../utils/Data/constant';
import PinkButton from '../../../components/PinkButton/PinkButton';
// import { useDispatch, useSelector } from 'react-redux';
// import { motion } from 'framer-motion';

const CountryCodeSelector = ({ setCountryCode }) => {
  const selectHandler = (e) => {
    setCountryCode(e.target.value);
  };
  return (
    <select
      name='country'
      id='country'
      className='ml-14 h-14 w-16 rounded-md bg-[#ffffff0d] text-white absolute pl-2 '
    >
      {countryCode.map((country) => {
        return (
          <option
            key={country.dial_code}
            value={country.dial_code}
            onClick={selectHandler}
            className='h-40 bg-red-500 '
          >
            <span className='mr-4'>{country.code}</span>{' '}
            <span className='ml-2'>{country.flag}</span>
          </option>
        );
      })}
    </select>
  );
};

const SignUpForm = ({ setSignUpError }) => {
  const [countryCode, setCountryCode] = useState('');
  return (
    <Formik>
      <Form>
        <div className='mb-[1.6rem] flex flex-col'>
          <label
            className='font-normal text-[22px] leading-[33px] text-[rgba(255,255,255,0.82)] mb-[0.5rem]'
            htmlFor='name'
          >
            Name
          </label>
          <div className='relative'>
            <UserIcon />
            <Field
              type='name'
              id='name'
              name='name'
              className='font-medium leading-8 text-[#d9d9d9] text-xl bg-[rgba(255,255,255,0.05)] border-solid border border-[rgba(255,255,255,.1)] rounded-[13px] py-[.7rem] px-[2.8rem]'
            />
          </div>
        </div>
        <div className='mb-[1.6rem] flex flex-col'>
          <label
            className='font-normal text-[22px] leading-[33px] text-[rgba(255,255,255,0.82)] mb-[0.5rem]'
            htmlFor='email'
          >
            Email Address
          </label>
          <div className='relative'>
            <MailIcon />
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
            htmlFor='phone'
          >
            Phone
          </label>
          <div className=' relative '>
            <PhoneIcon />
            <CountryCodeSelector setCountryCode={setCountryCode} />
            <Field
              type='tel'
              id='phone'
              name='phone'
              pattern='[0-9]*'
              maxLength='10'
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
          </div>
        </div>
        <PinkButton text='Sign In' />
        <p className='mt-4 font-normal text-[22px] leading-8 text-[rgba(255,255,255,.82)]'>
          Already have an account?{' '}
          <Link className='text-[#bd61ec]'>
            <span>Sign In</span>
          </Link>
        </p>
        <GoToHomeBtn />
      </Form>
    </Formik>
  );
};

export default SignUpForm;
