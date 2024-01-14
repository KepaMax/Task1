import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login/Login'
import Mainpage from './mainpage/Mainpage'
import CreateCard from './components/CreateCard'
import EditCard from './components/EditCard'
import DeleteCard from './components/DeleteCard'

function App() {
  const [authorized, setAuthorized] = useState(false)
  const [email, setEmail] = useState('')
  const [editVisibility,setEditVisibility] = useState(false)
  const [createVisibility,setCreateVisibility] = useState(false)
  const [deleteVisibility,setDeleteVisibility] = useState(false)
  return (
    <div className='overflow-clip relative'>
      <CreateCard createVisibility={createVisibility} setCreateVisibility={setCreateVisibility}></CreateCard>
      <EditCard editVisibility={editVisibility} setEditVisibility={setEditVisibility}></EditCard>
      <DeleteCard deleteVisibility={deleteVisibility} setDeleteVisibility={setDeleteVisibility}></DeleteCard>
      {authorized ? <Mainpage email={email} setCreateVisibility={setCreateVisibility} setDeleteVisibility={setDeleteVisibility} setEditVisibility={setEditVisibility} setAuthorized={setAuthorized} /> 
      : <Login email={email} setEmail={setEmail} setAuthorized={setAuthorized} />}
    </div>
  )
}

export default App
