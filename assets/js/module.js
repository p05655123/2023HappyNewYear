// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCcPnRbbbga2L4oSju3vaeJEkl_0D-E7FU",
        authDomain: "linhappynewyear-2f5aa.firebaseapp.com",
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

    function storedata() {
        db.collection("movies").doc("新世紀福爾摩斯").set({
            name: "新世紀福爾摩斯",
            date: "2010",
            desctiption: "本劇改編自阿瑟·柯南·道爾爵士家喻戶曉的推理小說，一位脾氣古怪的大偵探在現代倫敦的街頭悄悄巡行，四處搜尋線索。",
            actors: ["班尼迪克·康柏拜區", "馬丁·費曼"]
        });
    }
