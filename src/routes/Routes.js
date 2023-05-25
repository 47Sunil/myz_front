import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgetPassword from '../pages/ForgetPassword/index';
import PaymentGateway from '../pages/PaymentGateways/Index';
import Accounts from '../pages/Accounts/Accounts';
import Dashboard from '../pages/Dashboard';
import Subscription from '../pages/Subscription/Index';
import LandingPage from '../pages/LandingPage/index';
import UserAccount from '../pages/UserAccount/Index';
import OtherSettings from '../pages/OtherSettings/Index';
import Domain from '../pages/Domain/index';
import Layout from '../pages/AppBackground';
import Transaction from '../pages/Transaction/index';
import Logintest from '../pages/SignIn_Temp/Index';
import AuthGuard from '../Auth/AuthGuard';
import { useAutoLoginData } from '../actions/User/Login';
const Router = () => {
  const autoLogin = useAutoLoginData();
  const handleLogin = async () => {
    await autoLogin.mutateAsync();
  };
  useEffect(() => {
    handleLogin();
  }, []);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path='/dashboard'
            element=<AuthGuard component={<Dashboard />} />
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
            element=<AuthGuard component={<PaymentGateway />} />
          />
          <Route
            path='/payment-gateway/:method'
            element=<AuthGuard component={<PaymentGateway />} />
          />
          <Route
            path='/transactions'
            element=<AuthGuard component={<Transaction />} />
          />
          <Route
            path='/landing-pages/:method'
            element=<AuthGuard component={<LandingPage />} />
          />
          <Route
            path='/domain/:method'
            element=<AuthGuard component={<Domain />} />
          />
          <Route
            path='/account'
            element=<AuthGuard component={<UserAccount />} />
          />
          <Route
            path='/subscription'
            element=<AuthGuard component={<Subscription />} />
          />
          <Route
            path='/other-settings'
            element=<AuthGuard component={<OtherSettings />} />
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
