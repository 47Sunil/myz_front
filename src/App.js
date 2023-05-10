import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';
import ForgetPassword from './pages/ForgetPassword/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element=<SignIn />
        />
        <Route
          path='/signup'
          element=<SignUp />
        />
        <Route
          path='/forgetPassword'
          element=<ForgetPassword />
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
