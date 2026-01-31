import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Show from './show/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Show/> */}
  </StrictMode>,
)
