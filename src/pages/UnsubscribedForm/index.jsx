import React from 'react';
import rocket from '../../assets/icons/icon_rocket.png';
import Form from './components/UnsubscribedForm';
import bgForm from '../../assets/images/signin_bg.png';
import FormRight from '../../components/FormRight/FormRight';
import logo from '../../assets/logos/logo.png';
import styled from 'styled-components';
const AccountsLeft = styled.div`
  border: 0.5px solid black;
  width: 40%;
  min-width: 600px;
  background-color: #1e1e1e;
  background-image: url(${bgForm});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0 5rem;
`;
const UnsubscribedForm = () => {
  return (
    <div className='relative flex w-screen h-screen overflow-hidden '>
      <AccountsLeft>
        <div className='logo  h-[150px]  '>
          <img
            src={logo}
            alt='myzer'
            className='object-contain h-full '
          />
        </div>
        <div className=''>
          <div className='flex items-center mb-[2rem] gap-[0.5rem]'>
            <h1 className='font-semibold text-[35px] leading-[60px] text-white px-5'>
              Choosing Plan 😎{' '}
            </h1>
          </div>
          <Form />
        </div>
      </AccountsLeft>
      <FormRight />
    </div>
  );
};

export default UnsubscribedForm;
