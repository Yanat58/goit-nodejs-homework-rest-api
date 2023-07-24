const express = require('express');

const ctrl = require('../../controllers/auth');

const { validateBody } = require('../../middlewares');

const { loginSchema, registerSchema } = require('../../models/users');

const authRouter = express.Router();

// sing up
authRouter.post('/register', validateBody(registerSchema), ctrl.register);

// sing in
authRouter.post('/login', validateBody(loginSchema), ctrl.login);

module.exports = authRouter;
