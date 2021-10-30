import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyBO4vW427gvoBUHk7RPhgW7LdjNIehSf58",
    authDomain: "react-firebase-f7093.firebaseapp.com",
    projectId: "react-firebase-f7093",
    storageBucket: "react-firebase-f7093.appspot.com",
    messagingSenderId: "529312335159",
    appId: "1:529312335159:web:127221b9f20ad56f5886b2",
    measurementId: "G-J87JLMD12P"
  };

const initializeAuth=()=>{
    initializeApp(firebaseConfig);
    getAnalytics(initializeApp(firebaseConfig));
}

export default initializeAuth;