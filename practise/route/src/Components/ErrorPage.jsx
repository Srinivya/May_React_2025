import React from 'react'
import { Link } from 'react-router-dom'


const ErrorPage = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/">
    Move to Home Page
      </Link>
    </div>
  )
}

export default ErrorPage
