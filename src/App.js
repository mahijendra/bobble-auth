import React from 'react';
import './App.css';
import Form from "./component/Form"
import GoogleLogin from "react-google-login";
import SignIn from './auth/button';
import * as firebase from 'firebase';


class App extends React.Component{


  render() {
    return (

      <div className="App">
        <Form />
        <SignIn />
  
      </div>
  
    );
    
  }
}

export default App;



