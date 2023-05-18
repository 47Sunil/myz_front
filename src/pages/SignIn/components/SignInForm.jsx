import React, { useState } from 'react';
import GoToHomeBtn from '../../../components/BackToHome/BackToHome';
import { Link } from 'react-router-dom';
import LockIcon from '../../../assets/svg/Lock';
import UserIcon from '../../../assets/svg/User';
import EyeOpenIcon from '../../../assets/svg/EyesOpen';
import EyeCloseIcon from '../../../assets/svg/EyesClose';
import PinkButton from '../../../components/PinkButton/PinkButton';
import DynamicInputManager from '../../../components/DynamicInputManager/DynamicInputManager';
import RememberMe from './RememberMe';
import useSlide from '../../../hooks/useSlideAnimation';

const SignForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleChange } = useSlide();
  return (
    <form
      action=''
      className='mb-[1.6rem] flex flex-col'
    >
      <DynamicInputManager
        htmlId='email'
        label='Email Address'
        isRequired={true}
        placeholder='john@xyz.com'
        multiline={false}
        type='email'
        icon={<UserIcon />}
        states={[email, setEmail]}
      />
      <DynamicInputManager
        htmlId='password'
        label='Password'
        isRequired={true}
        multiline={false}
        type='password'
        icon={<LockIcon />}
        states={[password, setPassword]}
      />
      <div className='flex items-center justify-between px-5 pb-5'>
        <RememberMe />
        <Link className='font-normal text-[20px] leading-[33px] text-[rgba(255,255,255,.82)] '>
          Forget Password
        </Link>
      </div>
      <PinkButton text='Sign In' />
      <p className='mt-4 font-normal text-[20px] leading-8 text-[rgba(255,255,255,.82)] px-5 pb-5'>
        Don't have an account?{' '}
        <Link
          to='/accounts/signup'
          className='text-[#bd61ec] cursor-pointer hover:underline'
          onClick={handleChange}
        >
          <span>Sign Up</span>
        </Link>
      </p>
      <div className='px-5 pb-5'>
        <GoToHomeBtn text={'Go Back To Home'} />
      </div>
    </form>
  );
};

export default SignForm;
