import React, {Component} from 'react'
import action from '../redux/actions'


class TodoItem extends Component
{
	handleComplete(event)
	{
		event.preventDefault();
		this.props.dispatch(action.completetodo(this.props.todo.id))
	}

	handleDelete(event)
	{
		event.preventDefault();
		this.props.dispatch(action.deletetodo(this.props.todo.id))
	}
	
	render(){
		return (
			<li key={this.props.todo.id}> 
				<div>{this.props.todo.text} </div>
				<div>{this.props.todo.completed}</div> 
				<button onClick={this.handleComplete.bind(this)}>Mark as completed</button>
				<button onClick={this.handleDelete.bind(this)}>delete</button>
			</li>
		)
	}

}

export default TodoItem