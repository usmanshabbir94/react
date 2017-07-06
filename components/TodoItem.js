import React, {Component} from 'react'
import action from '../redux/actions'


class TodoItem extends Component
{
	handleComplete(event)
	{
		event.preventDefault();
		this.props.dispatch(action.compApi(this.props.todo.id,!this.props.todo.completed))
	}

	handleDelete(event)
	{
		event.preventDefault();
		this.props.dispatch(action.deleteApi(this.props.todo.id))
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
