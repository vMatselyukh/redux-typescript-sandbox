import React from "react";
import { connect, DispatchProp } from "react-redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {Dispatch , bindActionCreators, Action, AnyAction} from "redux"
import { AppThunk, ITodoState, RootState } from "../store/state";
import { getTodosActionCreator } from "../actionCreators/todosActions";
import { Todo } from "../models/todo";
import { IGetTodosAction } from "../actionCreators/interfaces";

interface TodoProps {
    getTodosList: () => Promise<IGetTodosAction>
}

type TodoState = {

}

class TodoList extends React.Component<TodoProps, TodoState> {
    
    componentDidMount(){
        this.props.getTodosList().then(ff =>
            console.log(ff.todos));
    }
    
    render(): JSX.Element {
        return (
            <>
                Component                
            </>
        );
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<Todo[], null, IGetTodosAction>): TodoProps => ({
    getTodosList: () => dispatch(getTodosActionCreator())
})

export default connect(null, mapDispatchToProps)(TodoList)