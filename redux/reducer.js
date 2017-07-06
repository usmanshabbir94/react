import request from 'superagent'
import {createStore} from 'redux'

function getID(state){
	return state.todos.reduce((maxID,todo) =>{
		return Math.max(todo.id,maxID)
	},-1) + 1
}


let reducer=  function (state=store.getstate, actions)
{
	switch(actions.type)
	{
		case 'ADD_TODO':
			return Object.assign({},state,{
				todos:[{
					text:actions.text,
					completed:false,
					id:getID(state)
					}, ...state.todos
				]
			})
		case 'signin':
			console.log(actions.data);
				return Object.assign({}, state, {
						userid: [{
								id: actions.data
							}]
				})
		case 'sendData':
			return Object.assign({},state,{
				todos:[{
					text:actions.data.content,
					completed:actions.data.completed,
					id:actions.data.id
					}, ...state.todos
				]
			})

		case 'COMP_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          return todo.id === actions.id ?
            Object.assign({}, todo, {completed: !todo.completed}) : todo
        })
      })
	  case 'DEL_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => {
          return todo.id !== actions.id
        })
      })

		default:
			return state;
	}
}

export default reducer
