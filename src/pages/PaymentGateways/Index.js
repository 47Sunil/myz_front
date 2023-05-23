import React from 'react';
import { useParams } from 'react-router-dom';
import AppBackground from '../AppBackground';
import AddNewPaymentGateway from './components/AddNewPaymentGateway';
import PaymentGatewayList from './components/PaymentGatewayList';
import SupportedGateways from './components/SupportedGateways';

const Index = () => {
  const { method } = useParams();
  return (
    <>
      {!method ? (
        <>
          <SupportedGateways />
          <PaymentGatewayList />
        </>
      ) : (
        <AddNewPaymentGateway />
      )}
    </>
  );
};

export default Index;
