
import { useLoaderData } from 'react-router-dom'

const User = () => {
   const userDetails=useLoaderData();
  return (
    <div className='UserCard'>
      <h1>User {userDetails.id}</h1>
        <h1>User {userDetails.title}</h1>
        <p>{userDetails.body}</p>
    </div>
  )
}

export default User
