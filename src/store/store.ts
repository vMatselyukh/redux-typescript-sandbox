import { createStore, combineReducers, applyMiddleware, DeepPartial, Store } from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from "../reducers/rootReducer"
import { RootState } from './state';

// export default createStore(
//   rootReducer,
//   undefined, 
//   applyMiddleware(thunk))

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)