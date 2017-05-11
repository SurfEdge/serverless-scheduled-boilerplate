'use strict';

module.exports.run = (event, context, callback) => {
  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
  
  console.log("SCHEDULED JOB RAN AT "+ new Date());
  callback(null, response);
};
