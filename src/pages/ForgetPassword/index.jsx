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
