import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgetPassword from '../pages/ForgetPassword/index';
import PaymentGateway from '../pages/PaymentGateways/Index';
import Accounts from '../pages/Accounts/Accounts';
import Dashboard from '../pages/Dashboard';
import LandingPage from '../pages/LandingPage/index';
import UserAccount from '../pages/UserAccount/Index';
import Domain from '../pages/Domain/index';
import Layout from '../pages/AppBackground';
import Transaction from '../pages/Transaction/index';
import Logintest from '../pages/SignIn_Temp/Index';
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path='/dashboard'
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
          <Route
            path='/payment-gateways'
            element=<PaymentGateway />
          />
          <Route
            path='/transaction'
            element=<Transaction />
          />
          <Route
            path='/landing-pages/:method'
            element=<LandingPage />
          />
          <Route
            path='/domain/:method'
            element=<Domain />
          />
          <Route
            path='/account'
            element=<UserAccount />
          />
          <Route
            path='/signintemp'
            element=<Logintest />
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
