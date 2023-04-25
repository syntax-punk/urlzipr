const { collection, where, query, getDocs } = require("firebase/firestore");
const { db } = require("./utils/firebase.js");

const DB_NAME = process.env.DB_NAME;


exports.handler = async function(event, ctx) {
  
  console.log('---> event: ', event);
  console.log('---> ctx: ', ctx);

  const pathParams = event.path.split('/');
  const hashValue = pathParams.pop();
  const hash = hash.replace('r-', '');

  try {
    const q = query(collection(db, DB_NAME), where("hash", "==", hash));
    const querySnapshot = await getDocs(q);
    let link;
    
    querySnapshot.forEach((doc) => {
      const data = doc.data(); 
      if (data.hash.toLowerCase() === hash.toLowerCase()) {
        link = data.link;
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