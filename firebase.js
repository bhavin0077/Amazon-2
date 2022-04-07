// Import the functions you need from the SDKs you need
import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY9OCNIp_G6DREN_EBp003ylS41hlidsc",
  authDomain: "b-85257.firebaseapp.com",
  projectId: "b-85257",
  storageBucket: "b-85257.appspot.com",
  messagingSenderId: "1039284099402",
  appId: "1:1039284099402:web:f867bb59428dd41f4989b3"
};

// Initialize 
const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig)
: firebase.app()

const db = app.firestore()

export default db