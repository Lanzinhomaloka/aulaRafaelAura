import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Perfil from './components/Perfil.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Perfil> </Perfil>
    <App />
  </StrictMode>,
)
