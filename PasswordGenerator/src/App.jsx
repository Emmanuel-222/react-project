import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [lenght, setLenght] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
      let result = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      
      if(isNumber) str += "0123456789"
      if(isCharacter) str += "!@#$%^&*"
      for(let i = 1; i < lenght; i++) {
        const char = Math.floor(Math.random() * str.length + 1)
        console.log(char);
        result += str.charAt(char)
      }

      setPassword(result)
  }, [lenght, isCharacter, isNumber])


  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

  useEffect(() => {
    generatePassword()
  }, [lenght, isNumber, isCharacter])


  
  return (
    <div className= 'bg-blue-950 p-8 w-30 flex items-center justify-between flex-col'>
      <h1 className='m-4 text-2xl text-white'>Password Generator</h1>
      <div className='mb-4'>
          <input 
          placeholder='Password'
          className='w-80 outline-none indent-1.5 p-3 rounded-md'
          readOnly
          value={password}
          type="text" 
          name="" 
          id="" 
          ref={passwordRef}
          />
          <button onClick={copyToClipboard} className='bg-blue-500 p-3 ml-1 rounded-md text-white'>
            Copy
          </button>
      </div>

      <div className='flex gap-x-2 text-sm'>
        <input 
        min={8}
        max={100}
        type="range"
        className='cursor-pointer'
        onChange={(e) => setLenght(e.target.value)}
        value={ lenght } 
        name="" 
        id="" />
        <label htmlFor="lenght">Lenght: { lenght }</label>
        <input 
        type="checkbox" 
        defaultChecked={setIsNumber}
        onChange={() => {
          setIsNumber((prev) => !prev)
        }}
        name="" 
        id="" />
        <label htmlFor="number">Number</label>
        <input 
        type="checkbox"
        defaultChecked={setIsCharacter} 
        onChange={() => {
          setIsCharacter((prev) => !prev)
        }}
        name="" 
        id="" />
        <label htmlFor="character">Character</label>
      </div>
    </div>
  )
}

export default App;
