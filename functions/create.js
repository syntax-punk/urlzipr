const { collection, addDoc } = require("firebase/firestore");
const { generateUrl } = require("./utils/randomize.js");
const { db } = require("./utils/firebase.js");
const validUrl = require('valid-url');

const DB_NAME = process.env.DB_NAME;

exports.handler = async function(event, ctx) {
  let body;
  //  check if link is valid
  const { link } = event.queryStringParameters;
  const { hash, url } = generateUrl();
  
  console.log('---> event: ', event)
  console.log('---> ctx: ', ctx)
  
  try {
    if (!link) {
      return {
        statusCode: 302,
        headers: {
          'Location': 'https://slit.link'
       }
      }
    } else {
      if (!validUrl.isUri(link)) {
        throw new Error("URL is not valid!!!");
      }
    }

    const date = new Date();
    const docRef = await addDoc(collection(db, DB_NAME), {
      link,
      hash,
      created: date.toISOString()
    });

    const body = {
      response: 'Ok',
      link
    }

    return {
      statusCode: 200,
      body: JSON.stringify(body)
    }
  } catch (e) {
    console.error("Error adding document: ", e);
    body = 'Opps';

    return {
      statusCode: 501,
      body
    }
  }
};