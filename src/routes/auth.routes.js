const express = require('express')
const router = express.Router();
const authenticator = require('../auth/authenticator');
// Retrieve all todo
router.post("/register", authenticator.registerUser);
router.post("/login",  authenticator.login);
module.exports = router