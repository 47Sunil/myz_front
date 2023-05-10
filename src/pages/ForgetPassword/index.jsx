import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logos/logo.png';
import sadFace from '../../assets/icons/icon_sad-face.png';
import bgForm from '../../assets/images/signin_bg.png';
import ForgetForm from './components/ForgetForm';
import FormRight from '../../components/FormRight/FormRight';
import FormLeft from '../../components/FormLeft/FormLeft';
const ForgetPasswordLeft = styled.div`
  border: 0.5px solid black;
  width: 40%;
  min-width: 600px;
  background-color: #1e1e1e;
  background-image: url(${bgForm});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
function Password() {
  return (
    <div className='relative flex w-screen h-screen overflow-hidden text-white'>
      <ForgetPasswordLeft>
        {/* <div className='my-0 mx-auto w-[75%] '>
          <img
            className='logo_img'
            alt='logo'
            src={logo}
          />
          <div className='flex items-center mb-[3rem] gap-[0.5rem]'>
            <h1 className='font-semibold text-[40px] leading-[60px] text-white'>
              Forget Password 🫤
            </h1>
          </div>
          <ForgetForm />
        </div> */}
        <FormLeft
          logo={logo}
          heading={'Forget Password'}
          headingIcon={sadFace}
          form={<ForgetForm />}
        />
      </ForgetPasswordLeft>
      <FormRight />
    </div>
  );
}

export default Password;
