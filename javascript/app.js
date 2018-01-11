// initialize database connection and register models
require('./db');
// list on port 8000
const portNum = 8000;
const express = require('express');
const app = express();
//line 8-23 copy pasted code from twilio node api https://www.twilio.com/docs/quickstart/node/programmable-voice#receiving-phone-calls
//however for an MVP we can do something with just a form
const http = require('http');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

http
  .createServer((req, res) => {
    // Create TwiML response
    const twiml = new VoiceResponse();

    twiml.say('Hello from your pals at Twilio! Have fun.');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  })
  .listen(1337, '127.0.0.1');

console.log('TwiML server running at http://127.0.0.1:1337/');

app.get('/', (req, res) => {  //welcome page, login and user auth
  
});

app.use('/:companyName', companyProfile); //bring them to company page and then other routes from that. Within the profile router, you can see the main database
										  //add your own data

app.listen(portNum);
console.log('listening on', portNum);
