import { useReducer } from "react";
import { todoReducer } from "./store/todo/todoReducer";
import { TodoContext, TodoDispatchContext } from "./store/todo/todoContext";
import App from "./App";

const TodoProvider =() => {
    const [todos, dispatch] = useReducer(todoReducer, [])
    return(
         <TodoContext value={todos}>
            <TodoDispatchContext value={dispatch}>
              <App />
            </TodoDispatchContext>  
        </TodoContext>
    )
}
export default TodoProvider;