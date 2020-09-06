import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from './config'

class SignIn extends React.Component {
 
    // The component's Local state.
    state = {
      isSignedIn: false // Local signed-in state.
    };
   
    // Configure FirebaseUI.
    uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
      }
    };
   
    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
      this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
          (user) => this.setState({isSignedIn: !!user})
      );
    }
    
    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
      this.unregisterAuthObserver();
    }
   
    render() {
      if (!this.state.isSignedIn) {
        return (
          <div style={{
            backgroundColor: "#2a2a2a",
            borderRadius: "10px"
          }}
          className="signin">
            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>  
          </div>
        );
      }
      return (
        <div>
            <div className="googlephoto">
                <img
                alt="photurl"
                src={firebase.auth().currentUser.photoURL}
                className="googlepic"
                />
                <button id="logout" onClick={() => firebase.auth().signOut()}>LOG OUT</button>          
            </div>
            <style jsx>{`

              .googlephoto {
                display: flex;
                flex-direction: column;
              }

              img {
                height: 55vh;
                border-radius: 200px;
                padding: 10px;
              }

              #logout {
                color: #fff;
                cursor: pointer;
                height: 5vh;
                border-radius: 10px;
                background-color: #1a1a1a;
                border: #1a1a1a;
              }

              #logout:hover {
                background-color: #000;
                border: #000;
              } 

            `}</style>

        </div>
      );
    }
  }
  
  export default SignIn