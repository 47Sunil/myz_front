// import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { useAutoLoginData } from './actions/User/Login';
// import { useAutoLoginData } from './actions/User/Login';
import Router from './routes/Routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// export const APP_ENVIRONMENT = 'local';

function App() {
  // const [IsSignedIn, setIsSignedIn] = useState(false);
  // const navigate = useNavigate();
  // const autoLogin = useAutoLoginData();
  // const handleLogin = async () => {
  //   const res = await autoLogin.mutateAsync();
  //   console.log(res);
  //   if (res?.success) {
  //     setIsSignedIn(true);
  //     navigate('/');
  //   } else {
  //     setIsSignedIn(false);
  //   }
  // };
  // useEffect(() => {
  //   !IsSignedIn && handleLogin();
  // }, []);
  return <Router />;
}

export default App;
