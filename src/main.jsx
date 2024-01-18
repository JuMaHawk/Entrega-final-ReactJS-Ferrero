import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7aM9CFrDynDtmK7qC88bWYLKmxXI9V6I",
  authDomain: "reactjs-e-commerce-coderhouse.firebaseapp.com",
  projectId: "reactjs-e-commerce-coderhouse",
  storageBucket: "reactjs-e-commerce-coderhouse.appspot.com",
  messagingSenderId: "629894082297",
  appId: "1:629894082297:web:9c29b191e647c1a010fc28",
  measurementId: "G-SCXH4E0ZYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
  
)