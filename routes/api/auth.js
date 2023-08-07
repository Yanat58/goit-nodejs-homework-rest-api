const express = require('express');

const ctrl = require('../../controllers/auth');

const { validateBody } = require('../../middlewares');

const { loginSchema, registerSchema, emailSchema } = require('../../models/users');

const authRouter = express.Router();

// sing up
authRouter.post('/register', validateBody(registerSchema), ctrl.register);

authRouter.get('/verify/:verificationToken', ctrl.verifyEmail);

authRouter.post('/verify', validateBody(emailSchema), ctrl.resendVerifyEmail);

// sing in
authRouter.post('/login', validateBody(loginSchema), ctrl.login);

module.exports = authRouter;
