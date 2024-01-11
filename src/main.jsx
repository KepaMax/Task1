import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TodoCard from './mainpage/components/TodoCard.jsx'
import LoginCard from './login/components/LoginCard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoCard></TodoCard>
  </React.StrictMode>,
)
