import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoCard from './mainpage/components/TodoCard'
import Navbar from './mainpage/components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <TodoCard></TodoCard>
    </>
  )
}

export default App
