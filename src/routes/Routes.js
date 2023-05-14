import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgetPassword from '../pages/ForgetPassword/index';
import PaymentGateway from '../pages/PaymentGateways/Index';
import Accounts from '../pages/Accounts/Accounts';
import Dashboard from '../pages/Dashboard';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element=<Dashboard />
        />
        <Route
          path='/accounts/:method'
          element=<Accounts />
        />
        <Route
          path='/forgetPassword'
          element=<ForgetPassword />
        />
        <Route path='/payment-gateway'
        element=<PaymentGateway/>
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
