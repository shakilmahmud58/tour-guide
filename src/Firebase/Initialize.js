import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyDmtWygLDLFnY6s1INs6aLRmdgS05YN038",
  authDomain: "mongo-firebase-3d0fa.firebaseapp.com",
  projectId: "mongo-firebase-3d0fa",
  storageBucket: "mongo-firebase-3d0fa.appspot.com",
  messagingSenderId: "391890041591",
  appId: "1:391890041591:web:efe04766ab071dcf3871f2"
};

const initializeAuth=()=>{
    initializeApp(firebaseConfig);
    getAnalytics(initializeApp(firebaseConfig));
}

export default initializeAuth;