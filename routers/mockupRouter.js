
const express = require('express')
const mockupController = require("../controllers/mockupController");
const feedController = require("../controllers/feedController");
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
//get mockup 
router.get("/edit/:mockupId", mockupController.getMockup);
//update mockup 
router.patch("/edit/:mockupId", mockupController.editMockup);


// create feed
router.post("/feed", feedController.createFeed);
//update feed 
router.patch("/feed", feedController.updateFeed);


//create asset
router.post("/createAsset", mockupController.createAsset);
//get asset
router.post("/getAsset", mockupController.getAsset);




router.post("/createReel", mockupController.createReel);
module.exports = router;