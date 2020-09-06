import React from 'react';
import './App.css';
import Form from "./component/Form"
import AuthProvider from './AuthProvider'
import Logout from './Logout';

class App extends React.Component{


  render() {
    return (

      <div className="App m-16">
        <AuthProvider>
          {(isSignedIn, init) => init ? (isSignedIn ? <Logout/> : <Form /> ) : null}
        </AuthProvider>
        
      </div>
  
    );
    
  }
}

export default App;



