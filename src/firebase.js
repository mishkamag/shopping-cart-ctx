// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQb1szQy4V0akCl-MWBVTOksV355sfnf0",
  authDomain: "shopping-room-ffc53.firebaseapp.com",
  projectId: "shopping-room-ffc53",
  storageBucket: "shopping-room-ffc53.appspot.com",
  messagingSenderId: "101231860611",
  appId: "1:101231860611:web:d49635cb33d5593cab34b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
