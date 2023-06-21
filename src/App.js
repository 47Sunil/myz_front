// import { useEffect } from 'react';
import './App.css';
// import { useAutoLoginData } from './actions/User/Login';
import Router from './routes/Routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// export const APP_ENVIRONMENT = 'local';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider
      client={queryClient}
      contextSharing={true}
    >
      <Router />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
