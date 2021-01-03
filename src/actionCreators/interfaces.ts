import { Action } from "redux";
import { Todo } from "../models/todo";

export interface IGetTodosAction extends Action<"GET_TODOS">{
    todos: Todo[];
}
export interface ITodosReadyAction extends Action<"TODOS_READY">{}

export type TodosActions = IGetTodosAction | ITodosReadyAction;