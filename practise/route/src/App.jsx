import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AboutPage from './Components/AboutPage';
import ErrorPage from './Components/ErrorPage';
import Login from './Components/Login';
import ProtectedLayout from './Components/ProtectedLayout';
import LayOut from './Components/LayOut';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>




       <Route path='/' element={<LayOut/>}>
           <Route index element={<Home/>}/>


        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route element={<ProtectedLayout isLoggedIn={isLoggedIn} />}>
          <Route path="/about/:userId/:username" element={<AboutPage />} />
        </Route>
        
       </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
