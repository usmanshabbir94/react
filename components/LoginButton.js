import React, {Component} from 'react'
import action from '../redux/actions'



class loginbutton extends Component
{
  constructor(props,context){
		super(props,context)
		this.state = {
			password:'',
      email:''
		}
	}

	handleSubmit(event)
	{
    event.preventDefault()
this.props.dispatch(action.login(this.state.email,this.state.password));
	}

	handleEmailChange(event){
		this.setState({
			email:event.target.value
		})
	}

	handlePasswordChange(event){
		this.setState({
			password:event.target.value
		})
	}

	render(){
		return (
			<div>
				<form onSubmit = {this.handleSubmit.bind(this)}>
					<input
						type='text'
					placeholder="email"
						value={this.state.email}
						onChange={this.handleEmailChange.bind(this)}/>
					<input
						type='password'
						placeholder="password"
						value={this.state.password}
						onChange={this.handlePasswordChange.bind(this)}/>
					<input type="submit" text="Submit" />
				</form>
			</div>
		)
	}
}

export default loginbutton
