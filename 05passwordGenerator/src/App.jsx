import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)

  const [numberAllowed, setnumAllowed] = useState(false);
  const [characterAllow, setcharAllow] = useState(false);
  const [password, setPassword] = useState("")

  //ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let passw = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (characterAllow) str += "~`!@#$%^&*()-_=+[{]}\\|;:',<.>/?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      passw += str.charAt(char)
    }

    setPassword(passw)
  }, [length, numberAllowed, characterAllow, setPassword])

  const copypsswrdToClip = useCallback(() =>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,80);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  } ,[length, numberAllowed,characterAllow,passwordGenerator])
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 pb-4 my-8 
      text-orange-500 bg-gray-700 '>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden m-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copypsswrdToClip}
          className='p-2 bg-orange-600 text-white shrint-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={90}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={characterAllow}
              id="characterInput"
              onChange={() => {
                setcharAllow((prev) => !prev);
                set
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
