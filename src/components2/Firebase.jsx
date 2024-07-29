import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

    // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyxx3XoMpTwaTBT6MWiqEMr7Ov4iXGnE0",
    authDomain: "login1-2d18b.firebaseapp.com",
    projectId: "login1-2d18b",
    storageBucket: "login1-2d18b.appspot.com",
    messagingSenderId: "1011654418267",
    appId: "1:1011654418267:web:1b1e001df17be952b4c47e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth();

  export const db = getFirestore(app)
  export default app ;
  


