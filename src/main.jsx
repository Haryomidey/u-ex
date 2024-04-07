import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './global.css'
import Router from './routes/main.routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
