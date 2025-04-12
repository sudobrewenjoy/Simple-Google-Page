import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzkcSXOIHvKo4TvuRe6Vlhw4l0jPKl0dU",
  authDomain: "productpage-info.firebaseapp.com",
  projectId: "productpage-info",
  storageBucket: "productpage-info.appspot.com",
  messagingSenderId: "65986122590",
  appId: "1:65986122590:web:9f3cc0382e06816df275cf",
  measurementId: "G-SQ0PVMW1BE"
};

// Initialize Firebase
let app;
let analytics;
let db;

// Check if the app is already initialized
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  db = getFirestore(app); // Initialize Firestore
} else {
  // Use the existing app if it's already initialized
  app = getApp();
  analytics = getAnalytics(app);
  db = getFirestore(app);
}

export { app, analytics, db }; // Exporting the Firebase app, analytics, and Firestore objects
