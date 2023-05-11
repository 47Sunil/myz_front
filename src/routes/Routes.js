import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgetPassword from '../pages/ForgetPassword/index';
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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
