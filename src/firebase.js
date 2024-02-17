// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add this line to import getAuth

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAa8SWRDFkrc5f7mwlUQ26dVbkrla7OZo",
  authDomain: "projectauthentication-8302b.firebaseapp.com",
  projectId: "projectauthentication-8302b",
  storageBucket: "projectauthentication-8302b.appspot.com",
  messagingSenderId: "923205434621",
  appId: "1:923205434621:web:d49a7a5beac1b6e48f1294",
  measurementId: "G-7T3V9QVBSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Add the following lines to get the authentication object
const auth = getAuth(app);

export { auth, app, analytics }; // Add analytics to the export
