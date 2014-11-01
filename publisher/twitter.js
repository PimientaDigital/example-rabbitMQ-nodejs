'use strict';

var config = require('../config/all');
var Twit = require('twit');
var amqp = require('amqp');

var connection = amqp.createConnection(config.amqp);

connection.on('ready', function() {
  connection.queue('mongodb', function(q) {
    q.bind('#');

    q.subscribe(function(message) {
      sendMessage(message);
    });
  });
});

var sendMessage = function(message) {

  console.log(message);

  T.post('statuses/update', {
    status: message.text
  }, function(err, data, response) {
    console.log(data)
  })
}
