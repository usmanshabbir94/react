import React , {Component} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import {connect} from 'react-redux'
import LoginButton from './LoginButton'
var App = React.createClass({
	render()
	{
		return	<div><LoginButton dispatch={this.props.dispatch} /><h1>Todo List</h1><TodoInput dispatch={this.props.dispatch} /><TodoList todos={this.props.todos} dispatch={this.props.dispatch}/></div>

	}
})

function mapStatetoProps (state){
	return state
}
export default connect(mapStatetoProps) (App)
