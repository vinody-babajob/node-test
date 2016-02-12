var express = require('express');
var rabbitmq = require('./rabbitmq.js');
var bodyParser = require('body-parser');
var amqp = require('amqp');
var app = express();
var conn = amqp.createConnection({ host: "localhost", port: 5672 });

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/:from/:to', function (req, res) {
	var from  = req.params.from;
	var to = req.params.to;
	rabbitmq.push(conn, from, to);
	// conn.on('ready', function () {
	// 	console.log('conn established');
	// 	rabbitmq.push(conn, from, to);
	// });
	
	res.send(from + ' hello ' + to);
});

app.listen(4000, function () {
	console.log('Example app listening on port 3000!');
});