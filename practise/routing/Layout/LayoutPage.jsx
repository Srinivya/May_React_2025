import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'

const LayoutPage = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default LayoutPage
