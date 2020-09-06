import React from 'react'
import firebase from './auth/config';

export default function Logout(){
    return <div>
    <div className="googlephoto  flex column">
        {/* <img
        alt="photurl"
        src={firebase.auth().currentUser.photoURL}
        className="googlepic"
        /> */}
        <button className="button bg-indigo-900 px-8 py-4 text-white" id="logout" onClick={() => firebase.auth().signOut()}>LOG OUT</button>          
    </div>
</div>
}