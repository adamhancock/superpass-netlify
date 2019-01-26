var Sentencer = require('sentencer');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function randomIntFromInterval(min, max) // min and max included
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}



exports.handler = function (event, context, callback) {


  // var number = Math.floor(Math.random() * 101);

  const number = randomIntFromInterval(1, 99)
  var words = Sentencer.make("{{ adjective }}{{ noun }}");
  var word = capitalizeFirstLetter(words);
  // const password = `${word}${number}`
  callback(null, {

    "statusCode": 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    },
    body: `${word}${number}`,
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
