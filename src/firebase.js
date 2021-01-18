import firebase from 'firebase'

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyATkvjarDYjFGtuJqMD0iH2AWpCB2BUiA0",
    authDomain: "to-do-app-cfa04.firebaseapp.com",
    projectId: "to-do-app-cfa04",
    storageBucket: "to-do-app-cfa04.appspot.com",
    messagingSenderId: "336160338935",
    appId: "1:336160338935:web:2b0834db41bca2a3ad74f2",
    measurementId: "G-8484FFPLSD"
  });

  const db = firebaseApp.firestore()

  export default db;