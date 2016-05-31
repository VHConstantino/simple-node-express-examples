// No HTTP this time around - and, isn't it interesting that we create an "app"?
var express = require('express');
var app = express();

// Our middleware, npm install body-parser
var bodyParser = require('body-parser');

// POST data comes in more than one format, we have to handle them both
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// These remain the same
const PORT=8080;
const serverName = "Tyler's express.js server of ultimate simplicity";

// But this is new.
app.get('*', function(req, res){
  res.send("Not a post");
});

app.post('*', function(req, res) {
  res.send(req.body);
});

// And this is 'same same but different'
app.listen(PORT);
