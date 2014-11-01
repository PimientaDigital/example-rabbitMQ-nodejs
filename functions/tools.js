'use strict';

var config = require('../config/all');

var sendMessage = function(message) {

  console.log(message);

  Twitter.post('statuses/update', {
    status: message.text
  }, function(err, data, response) {
    console.log(data)
  })
}

module.exports.sendMessage = sendMessage;
