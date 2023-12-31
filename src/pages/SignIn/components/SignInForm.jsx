import React, { useState } from 'react';
// import GoToHomeBtn from '../../../components/BackToHome/BackToHome';
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
import { toast } from 'react-hot-toast';

const SignForm = () => {
  const [lockFields, setLockFields] = useState(false);
  const [loginRequest, setLoginRequest] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const loginMutation = useLoginMutation();

  const handleUserLogin = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogin = async () => {
    try {
      setLockFields(true);
      await loginMutation.mutateAsync(loginRequest);
      setLockFields(false);
    } catch (err) {
      // toast.error(err.response.data.message);
      console.log(err);
      toast.error(err.response.data.message);
    }
  };
  const { handleChange } = useSlide();
  // console.log(loginRequest);
  const [eye, setEye] = useState(false);
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
        lock={lockFields}
      />
      <div className='relative w-full'>
        <DynamicInputManager
          htmlId='password'
          label='Password'
          isRequired={true}
          multiline={false}
          placeholder={'Enter Password'}
          type={eye ? 'text' : 'password'}
          icon={<LockIcon />}
          states={[loginRequest.password, setLoginRequest, 'password']}
          lock={lockFields}
        />
        <div
          className='absolute right-[2rem] top-[2.9rem] cursor-pointer '
          onClick={() => setEye(!eye)}
        >
          {eye ? <EyeCloseIcon /> : <EyeOpenIcon />}
        </div>
      </div>
      <div className='flex items-center justify-between px-5 pb-5'>
        <RememberMe
          loginRequest={loginRequest.rememberMe}
          setLoginRequest={setLoginRequest}
        />
        <Link
          className='font-normal text-[20px] leading-[33px] text-[rgba(255,255,255,.82)]'
          to={'/accounts/forgetPassword'}
        >
          Forget Password
        </Link>
      </div>
      <PinkButton
        text='Sign In'
        lock={lockFields}
      />

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
      <p className='mt-4 font-normal text-[20px] leading-8 text-[rgba(255,255,255,.82)] px-5 pb-5'>
        <button
          className='text-[#bd61ec] cursor-pointer hover:underline'
          type='button'
          onClick={() =>
            window.open('http://localhost:4000/auth/google', '_self')
          }
        >
          <span>Sign In With Google</span>
        </button>
      </p>
      {/* <div className='px-5 pb-5'>
        <GoToHomeBtn text={'Go Back To Home'} />
      </div> */}
    </form>
  );
};

export default SignForm;
