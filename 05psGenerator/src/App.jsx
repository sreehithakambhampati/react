import { useState,useCallback, useEffect,useRef } from 'react'


function App() {
  let [length,setLength] = useState(8);
  let [numberAllowed,setNumberAllowed] = useState(false);
  let [charAllowed,setCharAllowed] = useState(false);
  let [password,setPassword] = useState("");
  let passwordRef = useRef(null)

  // The useCallback hook does not execute the function; it just memoizes (caches) it so that it doesn't get recreated unless its dependencies change. The actual execution happens when the function is called somewhere in the code.
const passwordGenerator = useCallback(() =>
{
       let pass = "";
       let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
       if(numberAllowed)
        str+="0123456789"
      if(charAllowed)
        str+="!@#$%&^*(){}[]"
      for(let i=0;i<length;i++)
      {
           let c = Math.floor(Math.random()*str.length+1);
           pass +=str.charAt(c);
      }
      setPassword(pass)
},[length,numberAllowed,charAllowed])

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,100);
  window.navigator.clipboard.writeText(password)
},[password])

// The useEffect hook in React executes the function:

// When the component mounts (on page load).
// Whenever any of the dependencies in the dependency array change.
useEffect(() =>{
       passwordGenerator()
},[length,numberAllowed,charAllowed])



  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
    </>
  )
}

export default App
