const express = require('express');

const ctrl = require('../../controllers/users');

const { authentication, validateBody } = require('../../middlewares');

const { updateSubscriptionSchema } = require('../../models/users');

const usersRouter = express.Router();

// current
usersRouter.get('/current', authentication, ctrl.getCurrent);

// logout
usersRouter.post('/logout', authentication, ctrl.logout);

usersRouter.patch(
  '/subscription',
  authentication,
  validateBody(updateSubscriptionSchema),
  ctrl.subscription
);

module.exports = usersRouter;
