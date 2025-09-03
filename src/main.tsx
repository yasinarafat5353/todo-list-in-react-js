import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import type { TodoStateType } from './store/todo/todoInterface'
import { TodoContext } from './store/todo/todoContext'

const todos: TodoStateType = [
        {
            id: 1,
            title: "this is title from context",
            status: "Done"
        }
    ]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoContext value={todos}>
        <App />
         </TodoContext>
      </StrictMode>,
   
)    
