import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAc7Sh2diBeNiyRIFpqswUTYxmiQj5sHLM",
  authDomain: "chat-d9bca.firebaseapp.com",
  projectId: "chat-d9bca",
  storageBucket: "chat-d9bca.appspot.com",
  messagingSenderId: "1028912655398",
  appId: "1:1028912655398:web:fda4d320492b7443dfcae7"
};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();





// Initialize Firebase
// const app = initializeApp(firebaseConfig);