const AWS = require("aws-sdk");
const { randomize } = require("./utils/randomize.js");

const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {
  const { url } = JSON.parse(event.body);
  const id = randomize(6);
  const params = {
    TableName: "urlsDB",
    Item: {
      id,
      url,
      timestamp: Date.now()
    }
  };
  
  try {
    const data = await documentClient.put(params).promise();
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({id})
    };
    return response;
  } catch (e) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(e)
    };
  }
};