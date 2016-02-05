var express = require('express');
var app     = express();
var path    = require('path');

app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(1337);
console.log('1337 is the magic port!');