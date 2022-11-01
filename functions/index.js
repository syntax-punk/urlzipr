const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const { randomize } = require("./utils/randomize.js");

function configureFirebase() {
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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}

exports.handler = async function(event, ctx) {


};