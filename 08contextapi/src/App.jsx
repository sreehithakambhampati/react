import { useState } from 'react'
import './App.css'
import UserContextProvider from '../context/UserContextProvider'
import Profile from '../components/Profile'
import Login from '../components/Login'
// The Context API in React is needed to efficiently manage and share state across multiple components without prop drilling (i.e., passing props through multiple levels of components). It provides a global state that components can consume directly, improving maintainability and reducing unnecessary re-renders.

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContextProvider>
        <Login/>
         <Profile/>

      </UserContextProvider>
    </>
  )
}

export default App
