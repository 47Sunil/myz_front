import React, { Children } from 'react';
import styled from 'styled-components';
import bgForm from '../../assets/images/signin_bg.png';
import FormRight from '../../components/FormRight/FormRight';
import logo from '../../assets/logos/logo.png';
import SignInForm from '../SignIn/components/SignInForm';
import { Outlet } from 'react-router-dom';
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
  overflow-y: scroll;
`;

const Accounts = ({ children }) => {
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
        <Outlet />
      </AccountsLeft>
      <FormRight />
    </div>
  );
};

export default Accounts;
