

export interface ITodo {
    id: number;
    title: string;
    status: "Done" | "Doing";
}

export type TodoStateType = ITodo[];

export enum TODO_CASE {
    "ADD_TODO" = "ADD_TODO",
    "UPDATE_TODO" = "UPDATE_TODO",
    "SET_TODO" = "SET_TODO",
    "DELETE_TODO" = "DELETE_TODO"
}

type AddTodo ={
    type: TODO_CASE.ADD_TODO;
    payload: {
        title: string;
    }
}

type UpdateTodo ={
    type: TODO_CASE.UPDATE_TODO;
    payload: {
        id: number;
        title: string;  
    }
}

type SetTodo ={
    type: TODO_CASE.SET_TODO;
    payload: {
        id: number;
    }
}
type DeleteTodo ={
    type: TODO_CASE.DELETE_TODO;
    payload: {
        id: number;
    }
}

export type TodoActionType = 
| AddTodo 
|UpdateTodo 
|SetTodo 
|DeleteTodo;


