import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'

const Layout = () => {
  return (
 <Routes>
    <Route path='/' element={<App/>}/>
 </Routes>
  )
}

export default Layout
