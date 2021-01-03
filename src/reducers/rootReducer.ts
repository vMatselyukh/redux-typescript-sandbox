
import { combineReducers, Reducer } from "redux";
import { TodosActions } from "../actionCreators/interfaces";
import { ITodoState, initialTodosState, RootState } from "../store/state";


const todosReducer: Reducer<ITodoState, TodosActions> = (state = initialTodosState, action) => {

    if (action.type === "GET_TODOS") {
        console.log("reducer", action.todos);
        return state;
    }

    return state;
}

export const rootReducer = combineReducers<RootState>({
    todosState: todosReducer
});