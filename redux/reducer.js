function getID(state){
	return state.todos.reduce((maxID,todo) =>{
		return Math.max(todo.id,maxID)
	},-1) + 1
}

let reducer=  function (state, actions)
{
	console.log("assssssasasasas",actions)
	switch('ADD_TODO')
	{
		case 'ADD_TODO':
		console.log("hello")
			return Object.assign({},state,{
				todos:[{
					text:actions.text,
					completed:false,
					id:getID(state)
					}, ...state.todos
				]
			})

		default:
			return state;
	}
}

export default reducer