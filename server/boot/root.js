'use strict';

const mockEventData = require('../mock-data.json');

module.exports = function(server) {

  var router = server.loopback.Router();

  server.get('/events', (req, res) => {
    res.status(200).send(mockEventData);
  });

  server.use(router);
};
