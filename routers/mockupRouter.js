
const express = require('express')
const mockupController = require("../controllers/mockupController");
const { auth } = require('express-oauth2-jwt-bearer');
const router = express.Router()

const jwtCheck = auth({
    audience: 'https://mockup/api',
    issuerBaseURL: 'https://dev-ar0l70p2.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });


//get mockups created by the user 
router.get("/:userId", mockupController.getMockups);
//get mockups shared with user
router.get("/sharedmockups/:userId", mockupController.getSharedMockup);
//Create mockup
router.post("/create", mockupController.createMockup);
//Delete mockup
router.delete("/:mockupId", mockupController.deleteMockup);
//Share mockup
router.post("/share", mockupController.shareMockup);

router.post("/edit", mockupController.editMockup);
router.post("/delete", mockupController.deleteMockup);
router.post("/createAsset", mockupController.createAsset);
router.post("/getAsset", mockupController.getAsset);
router.post("/createReel", mockupController.createReel);
module.exports = router;