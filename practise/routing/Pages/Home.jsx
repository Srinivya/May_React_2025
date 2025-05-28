import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useState();

  

  return (
    <div>
      <h1>Home</h1>
      <button>Logout</button>
    </div>
  );
};

export default Home;
