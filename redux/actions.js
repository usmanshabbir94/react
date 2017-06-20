let actions =
{
	addtodo: function(text) 
	{
		return {
			type: 'ADD_TODO',
			text: text
		}
	},

	completetodo:function(id)
	{
		return{
			type: 'COMP_TODO',
			id: id
		}
	},

	deletetodo : function(id)
	{
		return{
			type: 'DEL_TODO',
			id: id
		}
	}
}

export default actions