const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();
let port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// routes
app.use('/', express.static(
  path.join(__dirname, 'html')
));
app.get('/alert', (req, res) => {

    res.send('attaboy');

});

app.listen(port, ()=>{
  console.log('web server listening on port '+port);
});

