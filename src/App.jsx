import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './assets/Components/Login/Login';
import Home from './assets/Components/Home/Home';
import Signup from './assets/Components/Signup/Signup';


function App() {
  return (
    <Router basename="/insta">
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/search" element={<div style={{ color: 'white', padding: '20px' }}>Search Page Coming Soon</div>} />


      </Routes>
    </Router>
  );
}

export default App;