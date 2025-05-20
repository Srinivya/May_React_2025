import React from 'react'
import './index.css'
import { useContext } from 'react'
import { UserContext } from './App'

const Details = () => {
const {details}=useContext(UserContext);
  return (
   details.map((item)=>(
 <div className='Card' key={item.id}>
      <h2>Name: {item.name}</h2>
      <h3>UserName: {item.username}</h3>
      <p>Email: {item.email}</p>
      <p>Phone: {item.phone}</p>
      <p>Address:{item.address.city}</p>
    </div>
   ))
  )
}

export default Details
