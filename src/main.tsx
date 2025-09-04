import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoProvider from './todoprovider'



createRoot(document.getElementById('root')!).render(
    <StrictMode>
       <TodoProvider />
    </StrictMode>,
)    


