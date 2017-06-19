// let actions = {
//   addtodo: function(text) {
//     return {
//       type: 'ADD_TODO',
//       text: text
//     }
//   } 
// }

// export default actions



let actions =
{
	addtodo: function(text) 
	{
		// console.log("TESTTT",text)
		return {
			type: 'ADD_TODO',
			text: text
		}
	}
}

export default actions