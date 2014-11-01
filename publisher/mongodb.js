'use strict';

var config = require('../config/all');
var mongoose = require('mongoose');
var amqp = require('amqp');

var connection = amqp.createConnection(config.amqp);

var db = mongoose.connect(config.db, function(err) {
  if (err) {
    console.error('\x1b[31m', 'Could not connect to MongoDB!');
    console.log(err);
  }
  console.log("Yeah conectado");
});

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  message: String,
  date: Date,
});

var MessageModel = mongoose.model('message', MessageSchema);

connection.on('ready', function() {
  connection.queue('mongoDB', function(q) {
    q.bind('#');

    q.subscribe(function(message) {
      saveMessage(message);
    });
  });
});

var saveMessage = function(message) {

  var docMessage = new MessageModel();
  docMessage.message = message.message;
  docMessage.date = require('moment')().format("YYYY-MM-DD");

  docMessage.save(function (error, data){
    if(error) return console.error(error);

    if(data){
      console.log("data Guardada en mongoDB");
    }
  })

}
