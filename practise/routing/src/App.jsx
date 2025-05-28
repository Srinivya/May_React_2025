import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import './App.css'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Login from '../Pages/Login'
import ContactLayout from '../Layout/ContactLayout'
import ContactForm from '../Component/ContactForm'
import Info from '../Component/info'
import NotFound from '../Pages/NotFound'
import UserLayout from '../Layout/UserLayout'
import Users from './Users'
import { singleLoader, userLoader } from '../Loader/UserLoader'
import LayoutPage from '../Layout/LayoutPage'
import User from '../Component/User'
function App() {

 const router=createBrowserRouter(
      createRoutesFromElements(
        
        <Route path="/" element={<LayoutPage/>} >
 <Route index element={<Home/>}/>
  <Route path="about" element={<About/>}/>
  <Route path="contact" element={<ContactLayout/>}>
     <Route path="info" element={<Info/>}/>
    <Route path="form" element={<ContactForm/>}/>
  </Route>
 <Route path="login" element={<Login/>}/>
 <Route path="users" element={<UserLayout/>}>
 <Route index element={<Users/>} loader={userLoader}/>
<Route path=":id" element={<User/>} loader={singleLoader}/>
 </Route>
 <Route path="*" element={<NotFound/>}/>
        </Route>
      )
    )
  return (

   <RouterProvider router={router}>

   </RouterProvider>
  )
}

export default App;
