import firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from '../../config/FireBase.Config';

const fireBaseInitialization = ()=>{
    firebase.apps.length || firebase.initializeApp(firebaseConfig);
    
}

const googleLogInSystem = ()=>{
    let googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider);
    
}


export { fireBaseInitialization, googleLogInSystem }