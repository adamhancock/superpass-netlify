var Sentencer = require('sentencer');

exports.handler = async (event, context, callback) => {


  var number = await Math.floor(Math.random() * 101);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var words = await Sentencer.make("{{ adjective }}{{ noun }}");
  var message = await capitalizeFirstLetter(words) + number;

  const response = {
    statusCode: 200,
    body: {"password": message},
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
