import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import ForgetPassword from '../pages/ForgetPassword/index';
import ForgetPasswordEmail from '../pages/ForgetPassword/components/ForgetForm';
import ForgetPasswordOTP from '../pages/ForgetPassword/components/ForgetFormOTP';
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
import { useAutoLoginData, useLoginMutation } from '../actions/User/Login';
import Editor from '../pages/LandingPage/Editor/Editor';
import Logout from '../pages/Logout';
import NotFound from '../pages/404NotFound';
import Verify from '../pages/SignUp/components/Verify';
import Checkout from '../pages/SubsCheckout';
import AppBackground from '../pages/AppBackground';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ErrorAccounts from '../pages/Error/index';
import Error from '../pages/Error/components/AccountsError';
// import Verify from '../pages/SignUp/components/Verify';
import { element } from 'prop-types';
import { toast } from 'react-hot-toast';
import { useQueryClient } from 'react-query';
const Protected = ({ isSignedIn, children }) => {
  if (!isSignedIn) {
    console.log(isSignedIn, '++++++++++++++');
    return (
      <Navigate
        to='/accounts'
        replace
      />
    );
  }
  return children;
};
const Router = () => {
  const queryClient = useQueryClient();
  const isUserLoggedIn = queryClient.getQueryData(['user']);
  console.log(isUserLoggedIn);
  const [isSignedIn, setIsSignedIn] = useState(true);
  console.log(isSignedIn, 'sdsdfsfsdf');
  const autoLogin = useAutoLoginData();
  const handleLogin = async () => {
    const res = await autoLogin.mutateAsync();
    console.log(res);
    if (res?.success) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  };
  useEffect(() => {
    !isUserLoggedIn && handleLogin();
  }, []);

  // PrivateRoute();
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Protected isSignedIn={isSignedIn}>
          {isUserLoggedIn && <AppBackground />}
        </Protected>
      ),
      errorElement: <ErrorAccounts />,
      children: [
        {
          index: true,
          element: (
            <Navigate
              replace
              to={'dashboard'}
            />
          ),
        },
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: 'landing-pages',
          element: <LandingPage />,
        },
        {
          path: 'transactions',
          element: <Transaction />,
        },
        {
          path: 'domain',
          element: <Domain />,
        },
        {
          path: 'payment-gateways',
          element: <PaymentGateway />,
        },
        {
          path: 'account',
          element: <UserAccount />,
        },
        {
          path: 'subscription',
          element: <Subscription />,
        },
        {
          path: 'other-settings',
          element: <OtherSettings />,
        },
      ],
    },
    {
      path: 'accounts',
      element: <Accounts />,
      children: [
        {
          index: true,
          element: (
            <Navigate
              replace
              to={'signin'}
            />
          ),
        },
        {
          path: 'signin',
          element: <SignIn />,
        },
        {
          path: 'signup',
          element: <SignUp />,
        },
        {
          path: 'verify',
          element: <Verify />,
        },
        {
          path: 'forgetPassword',
          element: <ForgetPassword />,
          children: [
            {
              index: true,
              element: <ForgetPasswordEmail />,
            },
            {
              path: 'otp',
              element: <ForgetPasswordOTP />,
            },
          ],
        },
      ],
    },

    {
      path: '/logout',
      element: <Logout />,
    },
  ]);
  return (
    // <BrowserRouter>
    //   <Layout>
    //     <Routes>
    //       <Route
    //         path='/'
    //         element=<AuthGuard component={<></>} />
    //       />
    //       <Route
    //         path='*'
    //         element=<NotFound />
    //       />
    //       <Route
    //         path='/dashboard'
    //         element=<AuthGuard component={<Dashboard />} />
    //       />
    //       <Route
    //         path='/accounts/:method'
    //         element=<Accounts />
    //       />
    //       <Route
    //         path='/verify'
    //         element=<Verify />
    //       />
    //       <Route
    //         path='/forgetPassword/:otp'
    //         element=<ForgetPassword />
    //       />

    //       <Route
    //         path='/forgetPassword'
    //         element=<ForgetPassword />
    //       />
    //       <Route
    //         path='/payment-gateways'
    //         element=<AuthGuard component={<PaymentGateway />} />
    //       />
    //       <Route
    //         path='/payment-gateway/:method'
    //         element=<AuthGuard component={<PaymentGateway />} />
    //       />
    //       <Route
    //         path='/transactions'
    //         element=<AuthGuard component={<Transaction />} />
    //       />
    //       <Route
    //         path='/landing-pages/:method'
    //         element=<AuthGuard component={<LandingPage />} />
    //       />
    //       <Route
    //         path='/domain/:method'
    //         element=<AuthGuard component={<Domain />} />
    //       />
    //       <Route
    //         path='/account'
    //         element=<AuthGuard component={<UserAccount />} />
    //       />
    //       <Route
    //         path='/subscription'
    //         element=<AuthGuard component={<Subscription />} />
    //       />
    //       <Route
    //         path='/checkout'
    //         element=<AuthGuard component={<Checkout />} />
    //       />
    //       <Route
    //         path='/other-settings'
    //         element=<AuthGuard component={<OtherSettings />} />
    //       />
    //       <Route
    //         path=':pageType/editor/:id'
    //         element=<AuthGuard component={<Editor />} />
    //       />
    //       <Route
    //         path='/signintemp'
    //         element=<Logintest />
    //       />
    //       <Route
    //         path='/logout'
    //         element=<AuthGuard component={<Logout />} />
    //       />
    //     </Routes>
    //   </Layout>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
};

export default Router;
