import React from 'react'
import firebase from './auth/config'

export default class AuthProvider extends React.Component{
    state = {
        isSignedIn : false
    }
    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({isSignedIn: !!user})
        );
      }
      componentWillUnmount(){
          this.unregisterAuthObserver();
      }
      render(){
          return <>
            {this.props.children(this.state.isSignedIn)}
          </>
      }
}