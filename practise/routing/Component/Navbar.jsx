import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'



const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='nav'>
      <div className="logo">Nivya</div>
      <ul>
       <NavLink to="/"> <li>Home</li></NavLink>
       <NavLink to="/about"> <li>About</li></NavLink>
       <NavLink to="/users"> <li>Users</li></NavLink>
       <NavLink to="/contact"> <li>Contact</li></NavLink>
      </ul>
      <button className='login' onClick={()=>{
        navigate("/login",{replace:true})
      }}>Login</button>

      
    </div>
  )
}

export default Navbar
