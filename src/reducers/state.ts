import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { Todo } from "../models/todo";

export type RootState = {
    todos: Todo[]
}

export type AppThunk<TReturnType = void> = ThunkAction<TReturnType, RootState, unknown, Action<string>>