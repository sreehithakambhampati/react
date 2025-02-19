import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About.jsx'
import Home from './components/home/Home.jsx'
import User from './components/user/User.jsx'
import Github from './components/Github.jsx'
import { gitHubInfoLoader } from './components/Github.jsx'
// const router = createBrowserRouter([
// {
//   path : '/',
//   element : <Layout/>,
//   children : [
//     {
//       path : "",
//       element : <Home/>
//     },
//     {
//       path:"about",
//       element : <About/>
//     }
//   ]

// }
// ]) 
 
const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      {/* To give this id to User component useParams is used */}
      <Route path='user/:userid' element={< User/>}/>
      <Route loader = {gitHubInfoLoader} path='github' element={<Github/>}/>

   </Route>


  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
