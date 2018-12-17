const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);


/*
Basic fetch structure

  fetch('/chat/token?identity=philnash')
    .then(res => res.json())
    .then(data => {
      console.log(data.token);
    });

  // Form encoded
  fetch('/chat/token', {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
    body: 'identity=philnash'
  })
    .then(res => res.json())
    .then(data => {
      console.log(data.token);
  });

  // JSON encoded
  fetch('/chat/token', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ identity: 'philnash' })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data.token);
    });
    
*/