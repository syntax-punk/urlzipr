const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");


let app, db;

function initApp() {
  const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  };
  
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  db = getFirestore();
}

initApp();

module.exports = {
  app, db
}