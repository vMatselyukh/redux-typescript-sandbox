import { Action } from "redux";

export interface IGetTodos extends Action<"GET_TODOS">{}
export interface ITodosReady extends Action<"TODOS_READY">{}

export type TodosActions = IGetTodos | ITodosReady;