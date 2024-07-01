import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { LanguageProvider } from './context/LanguageContext.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <LanguageProvider >
    <App />
  </LanguageProvider>

)
