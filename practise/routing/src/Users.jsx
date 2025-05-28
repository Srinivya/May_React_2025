import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Users = () => {
    const loaderData=useLoaderData();
  return (
    <div>
      <h1>Users</h1>
     {loaderData.map((user) => {
  return (
    <div key={user.id}>
      <Link to={user.id.toString()} key={user.id}>
        <div className='card'>
          <p>{user.title}</p>
        </div>
      </Link>
    </div>
  )
})}
    </div>
  )
}   

export default Users