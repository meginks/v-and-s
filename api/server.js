const express = require('express');
const peopleRouter = require('./people-router.js');
const placesRouter = require('./places-router.js');
const thingsRouter = require('./things-router.js');
const ideasRouter = require('./ideas-router.js');

const server = express();

server.use(express.json());

server.use('/api/people', peopleRouter);
server.use('/api/placesRouter', placesRouter);
server.use('/api/things', thingsRouter);
server.use('/api/ideas', ideasRouter);

module.exports = server;