import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TodoCard from './mainpage/components/TodoCard.jsx'
import { ContextWrapper } from './ContextWrapper.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextWrapper>
  </React.StrictMode>,
)
