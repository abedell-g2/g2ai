import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Prototype: disable all interactions (links, buttons) while preserving styling
document.addEventListener('click', (e) => {
  e.preventDefault()
  e.stopPropagation()
}, true)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
