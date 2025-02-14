// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

import { fetchHistoryData } from "./my-modules/fetchHistoryData";
import { submitData } from "./my-modules/submitData";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID
};

console.log(import.meta.env.VITE_API_KEY)

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Cloud Firestoreの初期化
export const db = getFirestore(app);

if(document.getElementById('js-history')) fetchHistoryData(db, collection, getDocs);

// Cloud Firestoreにデータを送信する
if(document.getElementById('js-form')) {
  document.getElementById('js-form').addEventListener('submit', (e) => {
    submitData(e, db, collection, addDoc);
  })
}