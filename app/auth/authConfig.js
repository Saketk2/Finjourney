// src/auth/authConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase config (use your actual Firebase project credentials)
const firebaseConfig = {
  apiKey: "AIzaSyBkH-fRJSyGeS08qImxtCsVvt9qTZzDd4M",
  authDomain: "Finjourney.firebaseapp.com",
  projectId: "finjourney-3b345",
  storageBucket: "Finjourney.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
