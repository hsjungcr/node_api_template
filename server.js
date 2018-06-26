var express = require('express');
var mongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

var app = express();

const port = 3000;

require('./app/routes')(app, {});
app.listen(port, () => {
    console.log('Listening on port ' + port);
});

