\react\proj\src\App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/log/login';
import SignupPage from './components/Reg/Reg';
import Button from '@mui/material/Button';

function App() {
  const [currentPage, setCurrentPage] = useState('login'); 
  const navigate = useNavigate();

  const togglePage = () => {
    setCurrentPage(currentPage === 'login' ? 'signup' : 'login');
  };

  const handleNavigate = () => {
    navigate('/' + currentPage);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <Button variant="text" style={{ fontSize: '11px' }} onClick={togglePage}>
          {currentPage === 'login' ? "Don't have an account? Sign up" : "Already have an account? Log in"}
        </Button>
        <Button variant="text" style={{ fontSize: '11px' }} onClick={handleNavigate}>
          Navigate using React Router (optional)
        </Button>
      </div>
    </Router>
  );
}

export default App;