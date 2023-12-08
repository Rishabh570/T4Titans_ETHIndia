const express = require('express');

const apiRouter = express.Router();

module.exports = ({ }) => {
  const { apiController } = require('../controller')({ });

  apiRouter.post('/webhook', apiController.processWebhook);
  apiRouter.post('/init', apiController.init);

  return apiRouter;
}
