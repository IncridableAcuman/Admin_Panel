import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ThemeProvider>
    <App />    
  </ThemeProvider>
  </BrowserRouter>

)
