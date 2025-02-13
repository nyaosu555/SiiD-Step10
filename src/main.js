// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2CYwBr_Yr-B7v-9bEanZMBqCGaW6PRac",
  authDomain: "siid-step10.firebaseapp.com",
  projectId: "siid-step10",
  storageBucket: "siid-step10.firebasestorage.app",
  messagingSenderId: "755688156923",
  appId: "1:755688156923:web:d4667c36944e71dd240a5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Cloud Firestoreの初期化
const db = getFirestore(app);

// Cloud Firestoreから取得したデータを表示する
const fetchHistoryData = async () => {
  let tags = '';

  // reportsコレクションのデータを取得
  const querySnapshot = await getDocs(collection(db, "reports"));

  // データをテーブルの表形式に合わせてHTMLに挿入
  querySnapshot.forEach((doc) => {
    console.log('L31: doc', doc);
    console.log(`${doc.id} => ${doc.data()}`);
    tags += `<tr>
                <td>${doc.data().date}</td>
                <td>${doc.data().name}</td>
                <td>${doc.data().work}</td>
                <td>${doc.data().comment}</td>
             </tr>`
  });
  document.getElementById('js-history').innerHTML = tags;
};

if(document.getElementById('js-history')) fetchHistoryData();