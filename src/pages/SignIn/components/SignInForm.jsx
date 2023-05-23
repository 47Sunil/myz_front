import React, { useState, useEffect } from 'react';
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
import { useLoginMutation } from '../../../actions/User/Login';

const SignForm = () => {
  const [loginRequest, setLoginRequest] = useState({
    email: 'rrsonawne123@hotmail.com',
    password: 'rohit123',
    rememberMe: false,
  });

  const loginMutation = useLoginMutation();

  const handleUserLogin = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogin = async () => {
    await loginMutation.mutateAsync(loginRequest);
  };
  const { handleChange } = useSlide();
  console.log(loginRequest);
  return (
    <form
      action=''
      method='POST'
      className='mb-[1.6rem] flex flex-col'
      onSubmit={(e) => handleUserLogin(e)}
    >
      <DynamicInputManager
        htmlId='email'
        label='Email Address'
        isRequired={true}
        placeholder='john@xyz.com'
        multiline={false}
        type='email'
        icon={<UserIcon />}
        states={[loginRequest.email, setLoginRequest, 'email']}
      />
      <DynamicInputManager
        htmlId='password'
        label='Password'
        isRequired={true}
        multiline={false}
        type='password'
        icon={<LockIcon />}
        states={[loginRequest.password, setLoginRequest, 'password']}
      />
      <div className='flex items-center justify-between px-5 pb-5'>
        <RememberMe
          loginRequest={loginRequest.rememberMe}
          setLoginRequest={setLoginRequest}
        />
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
