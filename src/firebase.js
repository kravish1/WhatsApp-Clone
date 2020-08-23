import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD3XHU9G5U7BtXXCvm4Ov018PFZKyp9UdA",
    authDomain: "whats-app-clone-e995f.firebaseapp.com",
    databaseURL: "https://whats-app-clone-e995f.firebaseio.com",
    projectId: "whats-app-clone-e995f",
    storageBucket: "whats-app-clone-e995f.appspot.com",
    messagingSenderId: "705591681592",
    appId: "1:705591681592:web:32458117447a48adb4fccd",
    measurementId: "G-DQ1BSPEWNJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;