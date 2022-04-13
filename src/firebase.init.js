// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsh8prnq9ydTu0EjltaXIvldTuy1NW8xA",
  authDomain: "genius-car-services-979fb.firebaseapp.com",
  projectId: "genius-car-services-979fb",
  storageBucket: "genius-car-services-979fb.appspot.com",
  messagingSenderId: "706826076769",
  appId: "1:706826076769:web:881b0741bba3a49836e020"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;