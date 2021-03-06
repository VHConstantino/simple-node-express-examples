// No HTTP this time around - and, isn't it interesting that we create an "app"?
var express = require('express');
var app = express();

// These remain the same
const PORT=8080;
const serverName = "Tyler's express.js server of ultimate simplicity";

// But this is new.
app.get('/', function(req, res){
  res.send(`This server is ${serverName}`);
});

// And these are 'hella' new.
app.get('/:user/:adjective/', function(req, res) {
  let user = req.params.user;
  let adjective = req.params.adjective;
  res.send(`${user} is hella ${adjective}`);
});

// And this is 'same same but different'
app.listen(PORT);
