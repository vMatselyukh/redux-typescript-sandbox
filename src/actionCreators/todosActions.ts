import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { TodoApi } from "../apis/todoApi";
import { Todo } from "../models/todo";
import { AppThunk, RootState } from "../reducers/state";

export const getTodos = (): AppThunk<Promise<Todo[]>> => async (dispatch): Promise<Todo[]> => {
    const todosPromise = new TodoApi().getTodos()
        .then(todos => {
            dispatch({ type: "GET_ALL_TODOS", payload: todos.data });
            
            return todos.data;
        });

    return todosPromise;
}
