
const express = require('express')
const mockupController = require("../controllers/mockupController");
const feedController = require("../controllers/feedController");
const storyController = require("../controllers/storyController");
const filterController = require("../controllers/filterController");
const reelController = require("../controllers/reelController");
const assetController = require("../controllers/assetController");
const { auth } = require('express-oauth2-jwt-bearer');
const router = express.Router()

const checkJwt = auth({
    audience: 'https://mockup/api',
    issuerBaseURL: 'https://dev-ar0l70p2.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });


//get mockups created by the user 
router.get("/:userId",mockupController.getMockups);
//get mockups shared with user
router.get("/sharedmockups/:userId",mockupController.getSharedMockup);
//Create mockup
router.post("/create", mockupController.createMockup);
//Delete mockup
router.delete("/:mockupId", mockupController.deleteMockup);
//Share mockup
router.post("/share", mockupController.shareMockup);
//get mockup 
router.get("/edit/:mockupId",mockupController.getMockup);
//update mockup 
router.patch("/edit/:mockupId", mockupController.editMockup);


//create asset
router.post("/asset", assetController.createAsset);
//get asset
// router.post("/getAsset", mockupController.getAsset);
router.get("/asset/:mockupId", assetController.getAsset);
//update asset
router.delete("/asset/:assetId", assetController.deleteAsset);

// create feed
router.post("/feed", feedController.createFeed);
//update feed 
router.patch("/feed", feedController.updateFeed);


//create story 
router.post("/story", storyController.createStory);
//update story 
router.patch("/story", storyController.updateStory);


//create Filter 
router.post("/filter", filterController.createFilter);
//update Filter
router.patch("/filter", filterController.updateFilter);

//create Reel
router.post("/reel", reelController.createReel);
//update Reel
router.patch("/reel", reelController.updateReel);




module.exports = router;