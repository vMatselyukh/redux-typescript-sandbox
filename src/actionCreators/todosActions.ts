import { ActionCreator, Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TodoApi } from "../apis/todoApi";
import { Todo } from "../models/todo";
import { AppThunk, RootState } from "../store/state";
import { IGetTodosAction, ITodosReadyAction } from "./interfaces";

export const getTodosActionCreator: ActionCreator<ThunkAction<
    Promise<IGetTodosAction>,
    Todo[],
    null,
    IGetTodosAction
>> = () => {
    return async (dispatch: Dispatch) => {
        const todosList = await new TodoApi().getTodos();
        const getTodosAction: IGetTodosAction = {
            todos: todosList.data,
            type: "GET_TODOS"
        };

        return dispatch(getTodosAction);;
    }
}
