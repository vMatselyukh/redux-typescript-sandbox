import React from "react";
import { connect, DispatchProp } from "react-redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {Dispatch , bindActionCreators, Action, AnyAction} from "redux"
import { AppThunk, RootState } from "../reducers/state";
import { getTodos } from "../actionCreators/todosActions";
import { Todo } from "../models/todo";

interface TodoProps {
    getTodosList: () => Promise<Todo[]>
}

type TodoState = {

}

class TodoList extends React.Component<TodoProps, TodoState> {
    
    componentDidMount(){
        this.props.getTodosList().then(ff =>
            console.log(ff));
        // this.props.getTodos().then(() =>
        // {
        //     console.log("happy");
        // });
    }
    
    render(): JSX.Element {
        return (
            <>
                Component                
            </>
        );
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, Action>):TodoProps => ({
    getTodosList: () => dispatch(getTodos())
})
    // bindActionCreators(
    // {
    //     getTodos
    // },
    // dispatch);

export default connect(() => {}, mapDispatchToProps)(TodoList)