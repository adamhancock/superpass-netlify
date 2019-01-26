var Sentencer = require('sentencer');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

exports.handler = function (event, context, callback) {


  // var number = Math.floor(Math.random() * 101);



  var words = Sentencer.make("{{ adjective }}{{ noun }}");
  var message = capitalizeFirstLetter(words);

  callback(null, {
    "statusCode": 200,
    body: message,
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
