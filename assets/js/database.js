import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
import { getFirestore, collection, doc, setDoc ,addDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
import { get, ref , set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const firebaseConfig = {
  apiKey: "AIzaSyCcPnRbbbga2L4oSju3vaeJEkl_0D-E7FU",
  authDomain: "linhappynewyear-2f5aa.firebaseapp.com",
  databaseURL: "https://linhappynewyear-2f5aa-default-rtdb.firebaseio.com",
  projectId: "linhappynewyear-2f5aa",
  storageBucket: "linhappynewyear-2f5aa.appspot.com",
  messagingSenderId: "518031072998",
  appId: "1:518031072998:web:a6a905a4ade09bed44e527",
  measurementId: "G-QWXGSRXYX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider()
const dbRef = collection(db, "users");

console.log(app)

window.getCities = async function getCities(){
  const data = {
    name: "Raja Tamil",
    country: "Canada"
  };
  await addDoc(dbRef, data)
  .then(docRef => {
      console.log("Document has been added successfully");
  })
  .catch(error => {
      console.log(error);
  })
  console.log("XD")
} 

window.logIn = async function logIn(){
  signInWithPopup(auth, googleAuthProvider)
                  .then(auth => console.log(auth))
} 

window.logOut = async function logOut(){
  signOut(auth).then(() => {
    console.log("logged out")
  })
} 

