import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { usePaymentPendingMutation } from '../../actions/Unsubscribed';
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: rgb(30, 30, 30);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &::before {
    content: '';
    background-color: rgba(30, 30, 30, 0.5);
    position: absolute;
    inset: 0;
    z-index: 10;
    height: 100%;
  }
  .btn {
    border-radius: 13px;
    background: linear-gradient(135deg, #f76f47 0%, #bd61ec 100%);
    border: none;
    color: white;
    width: 20%;
    text-align: center;
    padding: 0.5rem 0;
    font-size: 18px;
    margin-bottom: 2rem;
    margin-top: 4rem;
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
const PaymentPending = () => {
  const { mutate: PaymentPending } = usePaymentPendingMutation();
  return (
    <Wrapper>
      <PurpleDiv />
      <BlueDiv />
      <RedDiv />
      <h1 className='text-white text-[5rem] font-semibold relative z-20'>
        Your Payment is Pending
      </h1>
      <h3 className='text-white text-[2rem]'>Please clear your payment</h3>
      <Link
        to={'/accounts'}
        className='btn relative z-20 '
        onClick={() => PaymentPending()}
      >
        Continue to Payment
      </Link>
    </Wrapper>
  );
};

export default PaymentPending;
