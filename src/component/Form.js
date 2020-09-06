import React, { Component } from 'react'
import './CSS/todo.css'
import firebase from '../auth/config'

console.log(firebase)


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
        
        //let target = event.target;
        //let value = target.type ===='checkbox' ? target.checked : target.value;
        //let name = target.name;
        event.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
          
          

          this.setState({
            firstName: "",
            lastName: "",
            password: '',
            email: "",
        })
     
        
    }

    render() {
        return (
            <div>

<div className="flex flex-col bg-gray-300 max-w-2xl  mx-auto ">
  <div className="container flex-1 flex flex-col items-center justify-center px-2">
    <form className="px-6 py-8 rounded  text-black w-full" onSubmit={this.handleSubmit}>
      <h1 className="mb-8 text-3xl text-center">Sign up</h1>

      <div className="p-4 grid grid-cols-4 items-center justify-around w-full mb-8">
          <label>FirstName :</label>
      <input
        required
        type="text"
        className=" border border-grey-light w-full p-3 rounded mb-4 col-span-3 block"
        name="firstName"
        placeholder="First Name"
        value={this.state.firstName} onChange={this.firsthandler} 
      />
      </div>
      <div className="p-4 grid grid-cols-4 items-center justify-around w-full mb-8">
          <label>LastName :</label>
      <input
        required
        type="text"
        className=" border border-grey-light w-full p-3 rounded mb-4 col-span-3 block"
        name="lastName"
        placeholder="Last Name"
        value={this.state.lastName} onChange={this.lasthandler}
      />
      </div>
      <div className="p-4 grid grid-cols-4 items-center justify-around w-full mb-8">
      <label>Email-Id :</label>
 <input
        required
        type="text"
        className=" border border-grey-light w-full p-3 rounded mb-4 col-span-3 block"
        name="email"
        placeholder="Email"
        value={this.state.email} onChange={this.emailhandler} 
      />
      </div>
      <div className="p-4 grid grid-cols-4 items-center justify-around w-full mb-8">
          <label>Password :</label>

      <input
        required
        type="password"
        className=" border border-grey-light w-full p-3 rounded mb-4 col-span-3 block"
        name="password"
        placeholder="Password"
        value={this.state.password} onChange={this.passwordhandler} 
      />      
      </div>
      <button
        type="submit"
        className="w-full text-center py-3 rounded bg-indigo-700 text-white hover:bg-green-dark focus:outline-none my-1 "
      >
        Create Account
      </button>      
    </form>
    <div className="text-grey-dark mt-6">
      Already have an account?
      <a
        className="no-underline border-b border-blue text-blue"
        href="/login/"
      >
        Log in
      </a>
      .
    </div>
  </div>
</div>
{/* 
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
                </form> */}


              
             </div>
            
        )
    }
}

export default Form