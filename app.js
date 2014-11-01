'use strict';

var express = require('express');
var app = express(express.logger());
var http = require('http');
var path = require('path');
var config = require('./config/all');
var mongoose = require('mongoose');
var Twit = require('twit');
var routes = require('./routes')(app);
var tools = require('./functions/tools');
var amqp = require('amqp');

var connection = amqp.createConnection(config.amqp);

  // all environments
app.set('port', config.port);
app.set('config', config);
app.set('views', __dirname + '/views');
app.set('view engine', config.templateEngine);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.session({
  secret: "very secret"
}));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var server = require('http').createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io').listen(server);

var T = new Twit(config.twitter)

app.set('Twit', T);
app.set('io', io);

connection.on('ready', function() {
  connection.queue('show', function(q) {
    q.bind('#');

    q.subscribe(function(message) {
      io.sockets.emit("message", message);
    });
  });
});
