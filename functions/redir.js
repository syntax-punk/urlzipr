const { collection, getDocs } = require("firebase/firestore");
const { db } = require("./utils/firebase.js");

const DB_NAME = "links";


exports.handler = async function(event, ctx) {
  
  console.log('---> event: ', event);
  console.log('---> ctx: ', ctx);

  const pathParams = event.path.split('/');
  const hash = pathParams.pop();

  console.log('---> haaaash: ', hash);

  try {
    const querySnapshot = await getDocs(collection(db, DB_NAME));
    let link;
    querySnapshot,forEach((doc) => {
      if (doc.hash.toLowerCase() ===  hash.toLowerCase()) {
        link = doc.link;
      }
    });

    return {
      statusCode: 302,
      headers: {
         'Location': link
      }
    }
  } catch (e) {
    console.error("Error adding document: ", e);
    
    return {
      statusCode: 501,
      body: 'Oooops'
    }
  }
};