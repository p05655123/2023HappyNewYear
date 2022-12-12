import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

var db = firebase.firestore();
var ref = db.collection('fruit').doc('apple');

ref.set({
  total: 500,
  good: 480,
  sale: 330
}).then(() => {
  console.log('set data successful');
});