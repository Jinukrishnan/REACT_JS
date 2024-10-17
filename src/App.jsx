import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComp from './ClassComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <ClassComp/>
    </>
  )
}

export default App
