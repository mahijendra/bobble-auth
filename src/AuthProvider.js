import React from 'react'
import firebase from './auth/config'

export default class AuthProvider extends React.Component{
    state = {
        isSignedIn : false,
        init : false
    }
    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => {
                console.log(user);
                this.setState({isSignedIn: !!user, init: true})
            }
        );
      }
      componentWillUnmount(){
          this.unregisterAuthObserver();
      }
      render(){
          return <>
            {this.props.children(this.state.isSignedIn, this.state.init)}
          </>
      }
}