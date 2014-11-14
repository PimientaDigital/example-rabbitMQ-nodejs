'use strict';

module.exports = function(app) {

  app.get('/', function(request, response) {

    var Twit = app.get('Twit');
    var mongoose = require('mongoose');
    var moment = require('moment');
    var config = app.get('config');

    response.render('index', {
      title:"este es el title",
      message:"message"
    });

  });

};
