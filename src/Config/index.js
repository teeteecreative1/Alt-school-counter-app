// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq9A-GbTeKpb_laEwdtDipiXZU-SEX0PA",
  authDomain: "my-counter-application.firebaseapp.com",
  projectId: "my-counter-application",
  storageBucket: "my-counter-application.appspot.com",
  messagingSenderId: "53252812353",
  appId: "1:53252812353:web:87f02f721117b0530660c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
