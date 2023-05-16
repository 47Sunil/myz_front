import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgetPassword from '../pages/ForgetPassword/index';
import PaymentGateway from '../pages/PaymentGateways/Index';
import Accounts from '../pages/Accounts/Accounts';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/accounts/:method'
          element=<Accounts />
        />
        <Route
          path='/forgetPassword'
          element=<ForgetPassword />
        />
        <Route path={'/payment-gateway/'}
        element=<PaymentGateway/>
        />
        <Route path={'/payment-gateway/:method'}
        element=<PaymentGateway/>
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
