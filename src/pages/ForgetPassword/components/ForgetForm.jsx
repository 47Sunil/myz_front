import DynamicInputManager from '../../../components/DynamicInputManager/DynamicInputManager';
import UserIcon from '../../../assets/svg/User';
import PinkButton from '../../../components/PinkButton/PinkButton';
import GoToHomeBtn from '../../../components/BackToHome/BackToHome';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const ForgetForm = () => {
  const [email, setEmail] = useState('');
  return (
    <form
      action=''
      className='mb-[1.6rem] flex flex-col'
    >
      <DynamicInputManager
        htmlId='forgetPassword'
        label='Registered Email Address'
        isRequired={true}
        placeholder='john@xyz.com'
        multiline={false}
        type='email'
        icon={<UserIcon />}
        states={[email, setEmail]}
      />
      <PinkButton text='Next' />
      <p className='mt-4 font-normal text-[20px] leading-8 text-[rgba(255,255,255,.82)] px-5 pb-5'>
        Don't have an account?{' '}
        <Link className='text-[#bd61ec]'>
          <span>Sign Up</span>
        </Link>
      </p>
      <GoToHomeBtn />
    </form>
  );
};

export default ForgetForm;
