import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate=useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={()=>{
        navigate("info")
      }}>Info</button>

       <button onClick={()=>{
        navigate("form")
      }}>Contact Form</button>
    </div>
  )
}

export default Contact
