import React from 'react';
import './App.css';
import Form from "./component/Form"
import GoogleLogin from "react-google-login";
import SignIn from './auth/button';
import * as firebase from 'firebase';
import AuthProvider from './AuthProvider'

class App extends React.Component{


  render() {
    return (

      <div className="App m-16">
        <AuthProvider>
          {(isSignedIn) => isSignedIn ? <><Form />
              <SignIn />      </> : null}
        </AuthProvider>
        
      </div>
  
    );
    
  }
}

export default App;



