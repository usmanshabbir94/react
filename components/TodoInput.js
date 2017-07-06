import React, {Component} from 'react'
import action from '../redux/actions'
import {createStore} from 'redux'
import {todoselector} from '../selectors/todoselector'
import {gs} from 'react-global-state';

class TodoInput extends Component
{
	constructor(props,context){
		super(props,context)
		const {state} = this.props;
		this.state = {
			inputText:''
		}
	}

	// const  {values}  = this.props
	handleChange(event){
		this.setState({
			inputText:event.target.value
		})
	}

	handlesubmit(event)
	{
		event.preventDefault()
 		const {state} = this.props;
		debugger
		this.props.dispatch(action.Datatodo(this.state.inputText))

	}
	render(){
		const {state} = this.props
		return (
			<div>
				<form onSubmit = {this.handlesubmit.bind(this)}>
					<input
					type='text'
					placeholder="Type in your todo"
					value={this.state.inputText}
					onChange={this.handleChange.bind(this)}
					/>
					<input type="submit" text="Submit" />
				</form>
			</div>
		)
	}

}
// const mapStatetoProps = (state) => {
// 	return{
// 		values: todoselector(state)
// 	}
// }

export default TodoInput
