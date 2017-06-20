function getID(state){
	return state.todos.reduce((maxID,todo) =>{
		return Math.max(todo.id,maxID)
	},-1) + 1
}

let reducer=  function (state, actions)
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