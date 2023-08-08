import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logos/logo.png';
import SubsCard from './components/SubsCard';
import Footer from './components/Footer';
import { useQueryClient } from 'react-query';
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: rgb(30, 30, 30);
  overflow: hidden;
  &::before {
    content: '';
    background-color: rgba(30, 30, 30, 0.5);
    position: absolute;
    inset: 0;
    z-index: 10;
    height: 100%;
  }
`;
const PurpleDiv = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 1072px;
  height: 1072px;
  right: -50%;
  bottom: -50%;
  background-color: rgba(97, 23, 255, 0.57);
  filter: blur(500px);
`;
const RedDiv = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 1094px;
  height: 1094px;
  left: -30%;
  top: -65%;
  background-color: rgba(172, 32, 1, 0.8);
  filter: blur(500px);
`;
const BlueDiv = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 1225px;
  height: 1225px;
  left: -10%;
  top: -65%;
  background-color: rgba(28, 146, 255, 0.57);
  filter: blur(500px);
`;
const Unsubscribed = () => {
  const queryClient = useQueryClient();
  const { user } = queryClient.getQueryData('user');
  const paymentStatus = user.subscription.status || 'Inactive';
  console.log(paymentStatus);
  return (
    <Wrapper>
      <PurpleDiv />
      <RedDiv />
      <BlueDiv />
      <div className='top_logo w-full h-[100px] relative z-20  border-b-2 border-b-[rgba(255,255,255,.47)]'>
        <img
          src={logo}
          alt='Myzer'
          className='h-full w-full object-contain'
        />
      </div>

      <SubsCard paymentStatus={paymentStatus} />
      <Footer />
    </Wrapper>
  );
};

export default Unsubscribed;
