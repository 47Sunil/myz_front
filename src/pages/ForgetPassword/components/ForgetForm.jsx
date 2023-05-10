import { Formik, Form, Field } from 'formik';
import UserIcon from '../../../assets/svg/User';
import PinkButton from '../../../components/PinkButton/PinkButton';
import GoToHomeBtn from '../../../components/BackToHome/BackToHome';
import { Link } from 'react-router-dom';
import React from 'react';

const ForgetForm = () => {
  return (
    <Formik>
      <Form>
        <div className='mb-[1.6rem] flex flex-col'>
          <label
            className='font-normal text-[22px] leading-[33px] text-[rgba(255,255,255,0.82)] mb-[0.5rem]'
            htmlFor='forgetPassword'
          >
            Registered Email Address
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
        <PinkButton text='Next' />
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

export default ForgetForm;
