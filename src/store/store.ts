import { createStore, combineReducers, applyMiddleware, DeepPartial } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "../reducers/rootReducer"

export default createStore(
  rootReducer
, applyMiddleware(thunk))