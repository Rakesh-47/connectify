import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Homie from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/authcontext.jsx';

function App() {
  const { authuser } = useAuthContext();
  
  return (
    <div className="relative h-screen">
      <div className="background-container"></div>
      <div className="p-4 h-full items-center flex justify-center">
        <Routes>
          <Route path='/' element={authuser ? <Homie /> : <Navigate to="/login" />} />
          <Route path='/login' element={authuser ? <Navigate to="/" /> : <Login />} />
          <Route path='/signup' element={authuser ? <Navigate to="/" /> : <Signup />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
