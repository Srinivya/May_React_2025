import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';

const AboutPage = () => {

  const {userId,username}=useParams();

const navigate=useNavigate();
const goHome=()=>{
navigate("/");
}

  return (
    <div>
  
      <h2>About Page</h2>
      <p>Welcome , User ID {userId}</p>
      <p>Welcome , User Name: {username}</p>
      <button onClick={goHome}>Go Home</button>
    
    </div>
  )
}

export default AboutPage
