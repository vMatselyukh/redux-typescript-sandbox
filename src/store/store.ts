import { createStore, combineReducers, applyMiddleware, DeepPartial, Store } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from "../reducers/rootReducer"
import { RootState } from './state';
import { composeWithDevTools } from "redux-devtools-extension"

// export default createStore(
//   rootReducer,
//   undefined, 
//   applyMiddleware(thunk))

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
    )
)