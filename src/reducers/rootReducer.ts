import { Action } from "redux";
import { Todo } from "../models/todo";


const rootReducer = (state: Todo[] = [], action: any): Todo[] => {
    
    if(action.type === "GET_ALL_TODOS")
    {
        console.log("reducer", action.payload);
    }
    
    return state;
}

export default rootReducer;