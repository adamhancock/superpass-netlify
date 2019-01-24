var Sentencer = require('sentencer');

exports.handler = (event, context, callback) => {


  var number = Math.floor(Math.random() * 101);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var words = Sentencer.make("{{ adjective }}{{ noun }}");
  var message = capitalizeFirstLetter(words) + number;

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
    },
    body: `${message}`,
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
