// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsqTtA3xzDiekxxnPz9rYNSc7ti3OrucU",
  authDomain: "signup-carts.firebaseapp.com",
  projectId: "signup-carts",
  storageBucket: "signup-carts.appspot.com",
  messagingSenderId: "386690989689",
  appId: "1:386690989689:web:c34789be90eba40d02dea8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
