import DynamicInputManager from '../../../components/DynamicInputManager/DynamicInputManager';
import UserIcon from '../../../assets/svg/User';
import PinkButton from '../../../components/PinkButton/PinkButton';
import GoToHomeBtn from '../../../components/BackToHome/BackToHome';
import sadFace from '../../../assets/icons/icon_sad-face.png';
import { Link, useOutletContext } from 'react-router-dom';
import React, { useState } from 'react';
import { useForgetPasswordMutation } from '../../../actions/User/ForgetPassword';

const ForgetForm = () => {
  const [email, setEmail] = useOutletContext();
  const [lockFields, setLockFields] = useState(false);

  console.log(email);
  const { mutate: forgetPassword } = useForgetPasswordMutation();
  const handleSubmit = (email, e) => {
    e.preventDefault();
    setLockFields(true);
    forgetPassword(email);
  };

  return (
    <div className=''>
      <div className='flex items-center mb-[2rem] gap-[0.5rem]'>
        <h1 className='font-semibold text-[35px] leading-[60px] text-white px-5'>
          Forgot Password{' '}
        </h1>
        <img
          src={sadFace}
          alt='rocket'
          className='h-[40px] w-[40px]'
        />
      </div>
      <form
        action=''
        className='mb-[1.6rem] flex flex-col'
        onSubmit={(e) => handleSubmit(email, e)}
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
          lock={lockFields}
        />
        <PinkButton
          text='Next'
          lock={lockFields}
        />
        <p className='mt-4 font-normal text-[20px] leading-8 text-[rgba(255,255,255,.82)] px-5 pb-5'>
          Don't have an account?{' '}
          <Link
            className='text-[#bd61ec]'
            to={'/accounts/signup'}
          >
            <span>Sign Up</span>
          </Link>
        </p>
        {/* <GoToHomeBtn /> */}
      </form>
    </div>
  );
};

export default ForgetForm;
