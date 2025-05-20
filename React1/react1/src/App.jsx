import React from 'react'
import Child from './Child'
import './index.css'
import Course from './Course'
import Login from './Login'
import { Link} from 'react-router-dom'
const App = () => {

  return (
    <div>
      
<h1>App page</h1>
<Link to="/login">Login</Link>
<Link to="/Course">Course page</Link>
    </div>
  )
}

export default App
