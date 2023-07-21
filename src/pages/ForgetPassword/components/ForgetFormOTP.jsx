import React, { useState } from 'react';
import {
  useForgetPasswordMutation,
  useForgotPasswordResendOTP,
  useForgotPasswordUpdate,
} from '../../../actions/User/ForgetPassword';
import DynamicInputManager from '../../../components/DynamicInputManager/DynamicInputManager';
import PinkButton from '../../../components/PinkButton/PinkButton';
import { Link, useOutletContext } from 'react-router-dom';
import LockIcon from '../../../assets/svg/Lock';
import EyeCloseIcon from '../../../assets/svg/EyesClose';
import EyeOpenIcon from '../../../assets/svg/EyesOpen';
import { useQueryClient } from 'react-query';
import OTPInput from 'react-otp-input';

const ForgetFormOTP = () => {
  const [email, setEmail] = useOutletContext();
  const [lockFields, setLockFields] = useState(false);

  const { mutate: resendOTP } = useForgotPasswordResendOTP();
  const handleResendOTP = (email) => {
    resendOTP(email);
  };
  const [emailOtp, setEmailOtp] = useState('');
  const [eye, setEye] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const { mutate: updatePassword } = useForgotPasswordUpdate();
  const handleSubmit = (otp, password, email, e) => {
    console.log(newPassword);
    e.preventDefault();
    setLockFields(true);
    updatePassword({ otp, password, email, setLockFields });
  };
  return (
    <div className=''>
      <div className='flex items-center mb-[2rem] gap-[0.5rem]'>
        <h1 className='font-semibold text-[35px] leading-[60px] text-white px-5'>
          Verification{' '}
        </h1>
      </div>
      <form
        action=''
        className='mb-[1.6rem] flex flex-col'
        onSubmit={(e) => handleSubmit(emailOtp, newPassword, email, e)}
      >
        <div className='flex flex-col gap-3 px-5 pb-5'>
          <label className='text-white flex justify-between'>
            <p>Email OTP</p>
            <p>Sent on {email}</p>
          </label>
          <OTPInput
            value={emailOtp}
            onChange={setEmailOtp}
            numInputs={6}
            renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
            renderInput={(props) => <input {...props} />}
            containerStyle={{ width: '100%' }}
            inputStyle={
              lockFields
                ? 'disabled removeSpinBtn bg-[rgba(0,0,0,0.56)] border-2 border-white'
                : 'removeSpinBtn'
            }
            inputType='number'
            shouldAutoFocus={true}
          />
        </div>
        <div className='relative w-full'>
          <DynamicInputManager
            htmlId='newPassword'
            label='New Password'
            isRequired={true}
            placeholder='Enter New Password'
            multiline={false}
            type={eye ? 'text' : 'password'}
            icon={<LockIcon />}
            states={[newPassword, setNewPassword]}
            lock={lockFields}
          />
          <div
            className='absolute right-[2rem] top-[2.9rem] cursor-pointer '
            onClick={() => setEye(!eye)}
          >
            {eye ? <EyeCloseIcon /> : <EyeOpenIcon />}
          </div>
        </div>

        <PinkButton
          text='Proceed'
          lock={lockFields}
        />
        <p className='mt-4 font-normal text-[20px] leading-8 text-[rgba(255,255,255,.82)] px-5 pb-5'>
          Didn't recieved the OTP?{' '}
          <button
            className='text-[#bd61ec]'
            type='button'
            onClick={() => handleResendOTP(email)}
          >
            <span>Resend OTP</span>
          </button>
        </p>
        {/* <GoToHomeBtn /> */}
      </form>
    </div>
  );
};

export default ForgetFormOTP;
