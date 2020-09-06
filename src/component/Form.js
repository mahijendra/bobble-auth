import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            email: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    } 
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Signed-in !!!!`)
        console.log(this.state);

        //let target = event.target;
        //let value = target.type ===='checkbox' ? target.checked : target.value;
        //let name = target.name;


        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            gender: "",
        })
     event.preventDefault()
        
    }






    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h4>SIGN UP</h4>
                    <h1>Create your account </h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                    <button id="loginButton">Login with Google</button><br></br>

                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>Email-Id :</label><input type="text" value={this.state.email} onChange={this.emailhandler} placeholder= "Email..." /><br  />
                        
                    
                    <input type="submit" value="SIGN UP" />
                </form>


              
             </div>
            
        )
    }
}

export default Form