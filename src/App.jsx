import { useState } from 'react'

import './App.css'

function App() {
  const [Lenght,setLenght] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [Chr,setChr] =useState(false);
  const [Password,setPassword] =useState("");

  return (
    <>
      <h1 className="text-4xl text-center">Password Generater</h1>
    </>
  )
}

export default App
