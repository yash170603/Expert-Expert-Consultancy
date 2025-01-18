import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NeetPG from './components/NeetPG';
import NeetUG from './components/NeetUG';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path='/neet-pg' element={<NeetPG />} />
          <Route path="/neet-ug" element={<NeetUG />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;