"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,GET"
  },
    body: JSON.stringify(
      {
        message: "This message was created with the Serverless framework lambda function.",
        input: event,
      },
      null,
      2
    ),
  };
};
