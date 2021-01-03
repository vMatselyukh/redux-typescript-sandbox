import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { Todo } from "../models/todo";

export interface ITodoState{
    readonly todos: Todo[]
}

export interface RootState {
    readonly todosState: ITodoState
}

export const initialTodosState: ITodoState = {
    todos: []
}

export type AppThunk<TReturnType = void> = ThunkAction<TReturnType, RootState, unknown, Action<string>>