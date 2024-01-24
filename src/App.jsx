import { useContext } from 'react'
import './App.css'
import Login from './login/Login'
import Mainpage from './mainpage/Mainpage'
import Context from './ContextWrapper'
import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'

function App() {
  const { authorized } = useContext(Context)

  return (
    <Routes>
      <Route path='/' element={<Navigate to="/login" replace />} />

      {authorized ? <Route path='/mainpage' element={<Mainpage />} /> :
      <Route path='/login' element={<Login />} />}

      <Route path='*' element={< NotFound />} />
    </Routes>
  )
}

export default App