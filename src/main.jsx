import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFop43VB9MYCtppX8I4e42P3vrx15Z8ao",
  authDomain: "react-cell-store.firebaseapp.com",
  projectId: "react-cell-store",
  storageBucket: "react-cell-store.firebasestorage.app",
  messagingSenderId: "450655249538",
  appId: "1:450655249538:web:a6114e1f231f588dddc09b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)
