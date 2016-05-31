// No HTTP this time around - and, isn't it interesting that we create an "app"?
var express = require('express');
var app = express();
var birdsRoutes = require('./birds');

// These remain the same
const PORT=8080;
const serverName = "Tyler's express.js server of ultimate simplicity";

// But this is new.
app.get('/', function(req, res){
  res.send(`This server is ${serverName}`);
});

// You can prefix EVERY bird route with birds this way.
app.use('/birds', birdsRoutes);

// This route is dangerous / potentially creates a bug. Why is that?
app.get('/:user/:adjective/', function(req, res) {
  let user = req.params.user;
  let adjective = req.params.adjective;
  res.send(`${user} is hella ${adjective}`);
});

// And this is 'same same but different'
app.listen(PORT);
