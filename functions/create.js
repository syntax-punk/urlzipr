const { collection, addDoc } = require("firebase/firestore");
const { generateUrl } = require("./utils/randomize.js");
const { db } = require("./utils/firebase.js");

const DB_NAME = "links";

exports.handler = async function(event, ctx) {
  let body;
  //  check if link is valid
  const { link } = event.queryStringParameters;
  const { hash, url } = generateUrl();
  
  console.log('---> event: ', event)
  console.log('---> ctx: ', ctx)
  
  try {
    const date = new Date();
    const docRef = await addDoc(collection(db, DB_NAME), {
      link,
      hash,
      created: date.toISOString()
    });
    console.log("-> written with ID: ", docRef.id);
    body = 'Ok -> ' + url;
  } catch (e) {
    console.error("Error adding document: ", e);
    body = 'Opps';
  }

  return {
    statusCode: 200,
    body
  }
};