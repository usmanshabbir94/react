import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

let finalcreateStore= compose(
	applyMiddleware(thunk,createLogger()))(createStore)

export default function configureStore(initialState = {todos:[]})
{
	return finalcreateStore(reducer,initialState)
}
