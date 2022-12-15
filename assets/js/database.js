import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged , FacebookAuthProvider } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
import { getFirestore, collection, doc, setDoc ,addDoc, connectFirestoreEmulator } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
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
// connectFirestoreEmulator(db, 'localhost', 8080);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider()
// const facebookAuthProvider = new FacebookAuthProvider()
// facebookAuthProvider.addScope('public_profile');
googleAuthProvider.addScope('profile');
googleAuthProvider.addScope('email');
auth.languageCode = 'it';

window.uploadAnswer = async function uploadAnswer(){
  onAuthStateChanged(auth, user => {
    if(user){
      if(document.getElementById("answer").value === ""){
        alert('您尚未輸入答案 ！');
      }else{
        var yes = confirm('你確定要送出答案嗎？');
        if (yes) {
          var userName = user.displayName;
          var userUid = user.uid;
          try {
            setDoc(doc(db, "users", userUid), {
              name: userName,
              answer: document.getElementById("answer").value
            }, { merge: true });
          } catch (err) {
            console.error("Error: ", err);
          }
          document.getElementById("answer").value = "";
        }
      }
    }else{
      alert('您尚未登入無法上傳您的答案 ！');
    }
  })
} 

/* google登入 */
window.logIn = async function logIn(){
  signInWithPopup(auth, googleAuthProvider)
                  .then(auth => {
                    console.log(auth.user);
                    var content = auth.user.displayName;
                    document.getElementById("loginName").innerText = ("歡迎 " + content);
                  })
} 

window.logOut = async function logOut(){
  signOut(auth).then(() => {
    console.log("logged out")
    alert('已登出 !')
  })
}

window.loginPage = async function loginPage(){
  onAuthStateChanged(auth, user => {
    if(user){
      var content = user.displayName;
      document.getElementById("loginName").innerText = ("歡迎 " + content);
      document.getElementById('loginBtn').disabled = true;
      document.getElementById('logoutBtn').disabled = false;
    }else{
      document.getElementById("loginName").innerText = "親愛的用戶您好，您目前尚未登入\r\n點擊下方按鈕使用Google帳號登入"
      document.getElementById('loginBtn').disabled = false;
      document.getElementById('logoutBtn').disabled = true;
    }
  })
}

onAuthStateChanged(auth, user => {
  if(user){
    var content = user.displayName;
    document.getElementById("loginNav").innerText = (content + " 你好");
  }else{
    document.getElementById("loginNav").innerText = "登入頁面";
  }
})
