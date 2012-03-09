var app = require('express').createServer();

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.listen(process.env.PORT || 3000);