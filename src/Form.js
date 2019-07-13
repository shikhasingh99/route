import React,{Component} from 'react';
import './Form.css';
class Form extends Component{
	constructor(props){
		 super(props);
		this.state = {  fullname: "Shikha",
				email:"Shikha@gmail.com",
				phone:"98989898",
				message:"HIIII"	
			}
	}
	// handelname = (event) =>{
	// 	console.log(event.target.value);
	// 	this.setState({fullname: event.target.value})
	// }
	// handelemail=(event)=>{
	// 	console.log(event.target.value);
	// 	this.setState({email:event.target.value})
	// }
	// handelphone=(event)=>{
	// 	console.log(event.target.value);
	// 	this.setState({phone:event.target.value})
	// }
	// handelmessage=(event)=>{
	// 	console.log(event.target.value);
	// 	this.setState({message:event.target.value})
	// }
		handelchange = (event) =>{
		console.log(event.target.value);
		this.setState({ [event.target.name]:event.target.value})
	}
	handelsubmit=(event)=>{
		// alert(`name is ${this.state.fullname}.
		// 	  email is ${this.state.email},
		// 	  phone is ${this.state.phone},
		// 	  message is ${this.state.message}`);
		//alert(JSON.stringify(this.state));
		console.log(JSON.stringify(this.state));
		event.preventDefault();
	}
	render(){
		return(

				<div>
				<form onSubmit={this.handelsubmit}>
				<label>Fullname</label>
				<input type="text" name="fullname" value={this.state.fullname} onChange={this.handelchange}/><br/>
				<label>Email</label> <br/>
				<input type="email" value={this.state.email} name="email" onChange={this.handelchange} /><br/>
				<label>Mobile</label><br/>
				<input type="number" value={this.state.phone} name="phone" onChange={this.handelchange}/><br/>
				<label>Message</label><br/>
				<textarea value={this.state.message} name="message" onChange={this.handelchange} /> <br/><br/>
				<input type="Submit" value="Send" />
				</form>
				</div>
			)
	}
}
export default Form;
