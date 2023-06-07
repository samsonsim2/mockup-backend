
const express = require('express')
const authController = require("../controllers/authController");
const { auth } = require('express-oauth2-jwt-bearer');
const router = express.Router()




router.post("/register", authController.register);
module.exports = router;