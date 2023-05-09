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
    // <Formik>
    //   <Form>
    //     <div className='form-control'>
    //       <label
    //         className='sign_label'
    //         htmlFor='email'
    //       >
    //         Email Address{' '}
    //       </label>
    //       <div className='input_with_icon relative'>
    //         <UserIcon className='inputIcon' />
    //         <Field
    //           className='sign_input'
    //           type='email'
    //           id='email'
    //           name='email'
    //         />
    //       </div>
    //       <div className='error_container'>
    //           <ErrorMessage
    //             name='email'
    //             component={TextError}
    //           />
    //         </div>
    //     </div>
    //     <div className='form-control'>
    //       <label
    //         className='sign_label'
    //         htmlFor='password'
    //       >
    //         Password
    //       </label>
    //       <div className='input_with_icon relative'>
    //         <LockIcon className='inputIcon' />
    //         <Field
    //           className='sign_input'
    //           type={showPassword ? 'text' : 'password'}
    //           id='password'
    //           name='password'
    //         />
    //         <div className='iconEye'>
    //           {showPassword ? (
    //             <EyeCloseIcon
    //               onClick={() => setShowPassword(false)}
    //               className='cursor-pointer'
    //             />
    //           ) : (
    //             <EyeOpenIcon
    //               onClick={() => setShowPassword(true)}
    //               className='cursor-pointer'
    //             />
    //           )}
    //         </div>
    //       </div>
    //       <div className='error_container'>
    //         <ErrorMessage name='password'>
    //           {(errMsg) => <div className='error'>{errMsg}</div>}
    //         </ErrorMessage>
    //       </div>
    //     </div>

    //     <div className='form-control flex flex-row justify-between'>
    //       <div className='input-with-icon'>
    //         <Field name='terms'>
    //           {({ field, form }) => (
    //             <label
    //               htmlFor='terms'
    //               style={{ display: 'flex', alignItems: 'center' }}
    //             >
    //               <div
    //                 className='sign_check'
    //                 style={{
    //                   backgroundImage:
    //                     'linear-gradient(to bottom right, #FFC371, #FF5F6D)',
    //                   border: 'none',
    //                   boxShadow: 'none',
    //                   marginRight: '0.5rem',
    //                   width: '15px',
    //                   height: '15px',
    //                   borderRadius: '2px',
    //                   position: 'relative',
    //                 }}
    //               >
    //                 <input
    //                   type='checkbox'
    //                   id='terms'
    //                   {...field}
    //                   checked={checked}
    //                   onClick={() => setChecked((prev) => !prev)}
    //                   style={{
    //                     opacity: '0',
    //                     position: 'absolute',
    //                     top: '0',
    //                     left: '0',
    //                     height: '100%',
    //                     width: '100%',
    //                     cursor: 'pointer',
    //                   }}
    //                 />
    //                 {field.value && (
    //                   <div
    //                     style={{
    //                       position: 'absolute',
    //                       top: '50%',
    //                       left: '50%',
    //                       transform: 'translate(-50%, -50%)',
    //                       width: '8px',
    //                       height: '8px',
    //                       // borderRadius: "50%",
    //                       backgroundColor: 'white',
    //                       content: '\f00c',
    //                       color: '#2196F3',
    //                       fontFamily: 'Font Awesome 5 Free',
    //                       fontWeight: '900',
    //                       fontSize: '33px',
    //                     }}
    //                   />
    //                 )}
    //               </div>
    //               <span
    //                 style={{
    //                   fontWeight: 400,
    //                   fontSize: '22px',
    //                   lineHeight: '33px',
    //                   color: 'rgba(255, 255, 255, 0.82)',
    //                 }}
    //                 className='cursor-pointer'
    //               >
    //                 Remember Me
    //               </span>
    //             </label>
    //           )}
    //         </Field>
    //       </div>
    //       <Link to='/forget-password'>
    //         <span
    //           style={{
    //             fontWeight: 400,
    //             fontSize: '22px',
    //             lineHeight: '33px',
    //             color: 'rgba(255, 255, 255, 0.82)',
    //             marginLeft: 'auto',
    //           }}
    //           // navigation
    //         >
    //           Forget Password
    //         </span>
    //       </Link>
    //     </div>

    //     <PinkButton
    //       type='submit'
    //       text={' Sign In'}
    //     />
    //     <p className='formEndPara'>
    //       Don't have an Account ?{' '}
    //       <Link
    //         to='/account/signup'
    //         style={{
    //           textDecoration: 'none',
    //         }}
    //       >
    //         <span>Sign up</span>
    //       </Link>
    //     </p>
    //     <GoToHomeBtn />
    //   </Form>
    // </Formik>
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
