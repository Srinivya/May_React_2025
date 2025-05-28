import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Pages/Header'
import Footer from '../Pages/Footer'

const Home = () => {
  return (
    <div>
    
      <h2>Home Page</h2>
      <Link to="/about/:userId/:username" >
      Go to the About page
      </Link>
    
    </div>
  )
}

export default Home
