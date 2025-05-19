import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Login.jsx'
import ErrorPage from './ErrorPage.jsx'
import Course from './Course.jsx'
import Child from './Child.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>
  },
  {
     path:'/login',
    element:<Login/>
  },
  {
     path:'/Course',
    element:<Course/>
  },
  {
     path:'/Child',
    element:<Child/>
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
