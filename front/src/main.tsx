import React from 'react'
import App from './App.tsx'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)