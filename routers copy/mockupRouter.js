
const express = require('express')
const mockupController = require("../controllers/mockupController");
const { auth } = require('express-oauth2-jwt-bearer');
const router = express.Router()

const jwtCheck = auth({
    audience: 'https://mockup/api',
    issuerBaseURL: 'https://dev-ar0l70p2.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });


router.post("/", mockupController.createMockup);
module.exports = router;