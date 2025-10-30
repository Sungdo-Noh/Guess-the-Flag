import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GamingPage from './GamingPage';
import HomePage from './HomePage';
import EndingPage from './EndingPage';

function App() {
  return (
    <div className='header'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/gaming' element={<GamingPage />} />
        <Route path='/ending' element={<EndingPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
