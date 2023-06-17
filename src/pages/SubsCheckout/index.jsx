import React from 'react';
import FormLeft from '../../components/FormLeft/FormLeft';
import FormRight from '../../components/FormRight/FormRight';
import styled from 'styled-components';
import bgForm from '../../assets/images/signin_bg.png';
import logo from '../../assets/logos/logo.png';
import rocket from '../../assets/icons/icon_rocket.png';
import Form from './components/Form';

const SignInLeft = styled.div`
  border: 0.5px solid black;
  width: 40%;
  min-width: 600px;
  background-color: #1e1e1e;
  background-image: url(${bgForm});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Checkout = () => {
  return (
    <div className='relative flex w-screen h-screen overflow-hidden'>
      <SignInLeft className='overflow-y-scroll'>
        <FormLeft
          logo={logo}
          heading={'Choosing Plan'}
          headingIcon={rocket}
          form={<Form />}
        />
      </SignInLeft>
      <FormRight />
    </div>
  );
};

export default Checkout;
