import Button from "./components/Button";
import './App.css';
import { useState } from "react";


function App() {
  const [color, setColor] = useState('olive')
  console.log('Hello world')

  return (
    <div className="container" style={{background: color}}>
      <h1>Background Color Changer</h1>
      <div className="btn">
        <Button value="blue" changeColor={() => setColor('blue')}/>
        <Button value="green" changeColor={() => setColor('green')}/>
      </div>
    </div>
  )
}

export default App;
