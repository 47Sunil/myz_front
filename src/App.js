import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/index';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element=<SignIn />
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
