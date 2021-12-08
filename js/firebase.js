var firebaseConfig = {
  apiKey: "AIzaSyCZ8HNTkog787frY_B7CH7DAMvgtd0YPrY",
  authDomain: "temonqiita.firebaseapp.com",
  databaseURL: "https://temonqiita-default-rtdb.firebaseio.com",
  projectId: "temonqiita",
  storageBucket: "temonqiita.appspot.com",
  messagingSenderId: "417661788738",
  appId: "1:417661788738:web:07bea96fbd263b20ef03db"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// ref.push();で()内の値をfirebaseに送信 
const db = firebase.database();
