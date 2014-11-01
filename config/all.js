'use strict';

module.exports = {
  app: {
    title: 'test RabbitMQ',
    description: 'get message in realtime',
    keywords: 'mongodb, express, angularjs, node.js, mongoose, passport'
  },
  port: process.env.PORT || 5000,
  templateEngine: 'jade',
  sessionSecret: 'rabbitmq',
  sessionCollection: 'sessions',
  db: 'mongodb://localhost:27017/rabbitmq',
  amqp: {
    url :"amqp://lqyxfsih:Ox1X7qBkWM9fHpiv_GNqPVWpivUSLYqS@tiger.cloudamqp.com/lqyxfsih"
    },
  twitter:{
    consumer_key: 'sVeUBS46KxRZ9RBRLYe5ZqX5x',
    consumer_secret: 'sJUeOl8YcjF96RMUlD3zdS3Z0DZQhNjMeegKxWRJSeRH37d1TG',
    access_token: '296569315-LGnAQsZfO3M9yShy6ZUuy3xqxwZUFXl7pEXMUMec',
    access_token_secret: 'uDOo5UwOEIPmYUyW5J24zPxnGxv6U1drDwiFcVBPOC6qR'
  },
  params: {}
};
