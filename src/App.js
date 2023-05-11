import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';
import ForgetPassword from './pages/ForgetPassword/index';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Logintest from './pages/SignIn_Temp/Index';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
          <Route
            path='/test'
            element=<Logintest/>
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
