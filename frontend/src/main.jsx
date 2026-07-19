import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PredictionProvider } from "./context/PredictionContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PredictionProvider>
      <App />
    </PredictionProvider>
  </StrictMode>,
)