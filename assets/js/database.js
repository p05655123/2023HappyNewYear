import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged , FacebookAuthProvider } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
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
// const facebookAuthProvider = new FacebookAuthProvider()
// facebookAuthProvider.addScope('public_profile');
googleAuthProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
googleAuthProvider.addScope('profile');
googleAuthProvider.addScope('email');

auth.languageCode = 'it';
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

// window.logIn = async function logIn(){
//   signInWithPopup(auth, googleAuthProvider)
//                   .then(result => {
//                         // This gives you a Google Access Token. You can use it to access the Google API.
//                         const credential = GoogleAuthProvider.credentialFromResult(result);
//                         const token = credential.accessToken;
//                         // The signed-in user info.
//                         const user = result.user;
//                         console.log(user);
//                   })
// } 

// window.logOut = async function logOut(){
//   signOut(auth).then(() => {
//     console.log("logged out")
//   })
// } 

// window.signOut = async function signOut(){
//   signOut(auth).then(() => {
//     console.log("logged out")
//   })
// } 

/* google登入方法 */
window.logIn = async function logIn(){
  signInWithPopup(auth, googleAuthProvider)
                  .then(auth => console.log(auth))
} 

window.logOut = async function logOut(){
  signOut(auth).then(() => {
    console.log("logged out")
  })
} 
