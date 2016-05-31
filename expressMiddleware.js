// No HTTP this time around - and, isn't it interesting that we create an "app"?
var express = require('express');
var app = express();
const PORT=8080;

// To register middleware in express we use app.use
app.use(function (req, res, next) {
  console.log("Time middleware!");
  console.log('  -- Time:', Date.now());

  // What do you suppose next is?
  // What happens if we don't call it?
  next();
});

// Handle every request of any type
app.use(function (req, res, next) {
  console.log("Request Type middleware!");
  console.log("  -- Request Type: " + req.method);
  next();
});

// Route specific middleware!
app.use('/special', function(req, res, next) {
  console.log("Special Middleware!");
  next();
});

// Handle every GET
app.get('*', function(req, res, next){
  console.log("app.get request handler");
  res.write("the Response is legit");
  next();
});

// Middleware AFTER the get handler runs after the handler
app.use(function(req, res, next) {
  console.log("After Response Middleware", res.body);
  res.write("\nSO LEGIT");
  res.end();
  next();
});

app.listen(PORT);
