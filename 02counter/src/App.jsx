
import { useState } from 'react'
import './App.css'

function App() {
    
   let[counter,setCounter] = useState(15)
   let[message,setMessage ] = useState("")

   const addValue = () =>{
    if(counter<20)
    {
           counter = counter+1
           setCounter(counter);
           setMessage("")
        
    }
    else
    {
      setMessage("value cannot be greater than 20")
    }
   }
   const decreaseValue = () =>{
    if(counter>0)
    {
      counter = counter-1
       setCounter(counter);
       setMessage("")
 
    }
    else
    {
      setMessage("value cannot be less than 0")
    }
   }
  return (
    <>
        <h1>Counter value : {counter}</h1>
        <button onClick={addValue}> Add value : {counter} </button>
        <br />
        <button onClick={decreaseValue}>Decrease value : {counter} </button>
        <h3>{message}</h3>
    </>
  )
}

export default App
