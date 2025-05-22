import React, { useContext } from 'react'
import './App.css'
import { UserContext } from './Check';

const Course = () => {

const {courses,loading}=useContext(UserContext);


if(!courses){
  console.log("no page found");
  return <p>Page Not Found</p>
}
if(loading){
  return <div className='spinner'></div>
}

  return (
  
    <>
    
    { courses.map((item)=>(
 <div className='Card' key={item.id}>
      <h1>Name:{item.name}</h1>
      <h2>Username:{item.username}</h2>
      <p>email: {item.email}</p>
    </div>
    
     ))}
    
    
    </>
 
   
  )
}

export default Course