import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('first text');

  const changeText = () => {
    setText("New text");
  }
  return (
    <>
      <div>
        <p>{text}</p>
        <button onClick={changeText}>Change Text</button>
      </div>
    </>
  )
}

export default App
