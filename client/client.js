import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import {Provider} from 'react-redux'

let initialState = {
	userid:[{
		id: 0
	}],
	todos:[{
		id:0,
		completed: false,
		text: 'demo todo'
	}]
}

let store = configureStore(initialState)

render(<Provider store={store}><App/></Provider>,document.getElementById('app'))
