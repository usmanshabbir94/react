import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import {createLogger} from 'redux-logger'

let finalcreateStore= compose(
	applyMiddleware(createLogger()))(createStore)

export default function configureStore(initialState = {todos:[]})
{
	return finalcreateStore(reducer,initialState)
}