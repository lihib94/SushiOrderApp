import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'


const initalState = {}


export const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(thunk)))