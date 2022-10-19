
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import  'firebase/compat/firestore'
import { useRef } from 'react';



const firebaseConfig = {
    apiKey: "AIzaSyAp5KjzBse9dV5U0qrdHz7CDYQyVRAM2Zw",
    authDomain: "barberry-auth.firebaseapp.com",
    projectId: "barberry-auth",
    storageBucket: "barberry-auth.appspot.com",
    messagingSenderId: "808142113801",
    appId: "1:808142113801:web:52ad03776acb70025c7cd8"
  };
  
  // Initialize Firebase
 const app = firebase.initializeApp(firebaseConfig)
  export const auth = app.auth();
  export const firestore = firebase.firestore()
  
  export const createUserDocument = async (user, additionalData) => {
    if (!user) return;
  
    const userRef = firestore.doc(`users/${user.uid}`);
  
    const snapshot = await userRef.get();
  
    if (!snapshot.exists) {
      const { email } = user;
      const { displayName } = additionalData;
  
      try {
        await userRef.set({
          displayName,
          email,
          createdAt: new Date(),
        });
      } catch (error) {
        console.log('Error in creating user', error);
      }
    }
  };