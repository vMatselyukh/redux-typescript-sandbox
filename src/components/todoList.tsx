import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch} from "redux-thunk";
import { getTodosActionCreator, todosReadyActionCreator } from "../actionCreators/todosActions";
import { Todo } from "../models/todo";
import { IGetTodosAction, ITodosReadyAction } from "../actionCreators/interfaces";

interface TodoProps {
    getTodosList: () => Promise<IGetTodosAction>,
    todosReady: () => ITodosReadyAction
}

type TodoState = {

}

class TodoList extends React.Component<TodoProps, TodoState> {
    
    componentDidMount(){
        this.props.getTodosList().then(ff =>
        {
            console.log(ff.type);
            console.log(ff.todos);
        })

        this.props.todosReady();
    }
    
    render(): JSX.Element {
        return (
            <>
                Component                
            </>
        );
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<Todo[], null, IGetTodosAction | ITodosReadyAction>): TodoProps => ({
    getTodosList: () => dispatch(getTodosActionCreator()),
    todosReady: () => dispatch(todosReadyActionCreator())
})

export default connect(null, mapDispatchToProps)(TodoList)