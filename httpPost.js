"use strict"
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080;

function handleRequest(request, response) {
    if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;
        });

        request.on('end', function () {
            response.end(body);
        });
    }
    else {
      response.end("Wasn't a POST");
    }
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
