const express = require('express');
const bodyParser = require('body-parser');
const rootHandler = require('./handlers/root');
const alertHandler = require('./handlers/alert');

let app = express();
let port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/alert', alertHandler);
app.get('/', rootHandler);

app.listen(port, ()=>{
  console.log('web server listening on port '+port);
});

