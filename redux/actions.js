import request from 'superagent'
import store from './store'

let actions =
{
	addtodo: function(id,text)
	{
		console.log(id);
		return {
			type: 'ADD_TODO',
			text: text,
			id:id
		}
	},
	Datatodo: function (text)
	{
		return (dispatch,getState) =>
		{
			const state = getState();
			request
				.post('/addingtodo')
				.query({text:text,userid:state.userid[0].id})
				.end((err, res) => {
					if (err) {
							console.log(err);
						}
					dispatch(this.addtodo(res.text,text));
				})
		}
	},
	signinSuccess: function (data)
	{
		return {
			type:'signin',
			data:data,
		}
	},
	userData: function (id)
	{
		return (dispatch) =>
		{
			request
				.get('/userdata')
				.query({id:id})
				.end ((err,res) =>
				{
					if(err){
						console.log(err);
					}
					for(var i=0; i<res.body.length;i++)
					{
						dispatch(this.sendData(res.body[i]))
					}
				}
			)
		}
	},
	sendData : function (text)
	{
		return{
			type: 'sendData',
			data:text
		}
	},
	login: function(email,password)
	{
		return (dispatch,getState) =>
		{
			request
				.post('/login')
				.query({email:email, password})
				.end((err, res) => {
					if (err) {
							console.log(err);
						}
					dispatch(this.signinSuccess(res.text));
					dispatch(this.userData(res.text));
				})
		}
	},
	completetodo:function(id)
	{
		return{
			type: 'COMP_TODO',
			id: id
		}
	},
	compApi: function (id,completed)
	{
		return (dispatch,getState) =>
		{
			request
				.post('/completetodo')
				.query({id:id,text:completed})
				.end ((err,res) =>
				{
					if(err){
						console.log(err);
					}
					dispatch(this.completetodo(id))
				}
			)
		}
	},
	deletetodo : function(id)
	{
		return{
			type: 'DEL_TODO',
			id: id
		}
	},
	deleteApi: function (id)
	{
		return (dispatch,getState) =>
		{
			request
				.post('/deletetodo')
				.query({id:id})
				.end ((err,res) =>
				{
					if(err){
						console.log(err);
					}
					dispatch(this.deletetodo(id))
				}
			)
		}
	},

}


export default actions
