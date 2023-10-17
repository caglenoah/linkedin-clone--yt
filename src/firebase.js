
const firebaseConfig = {
    apiKey: "AIzaSyDIFgU7UcdSOz4ZazsHlfutUhYL0g3tJng",
    authDomain: "linkedin-clone-3d880.firebaseapp.com",
    projectId: "linkedin-clone-3d880",
    storageBucket: "linkedin-clone-3d880.appspot.com",
    messagingSenderId: "439882623135",
    appId: "1:439882623135:web:e61231db11e048408f5aaa",
    measurementId: "G-DC6XWGY27P"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
