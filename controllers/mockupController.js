const db = require("../db/models/index");

const {Mockup,Usermockup,User,Asset,Reel,Feed,Story,Filter} =db;
 
//GET MOCKUPS------------------------------------
const getMockups = async (req, res) => {
  const { userId } = req.params;    
try { 
  const mockups = await Mockup.findAll({ where: { createdBy: userId } });    
  return res.json(mockups)  
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 
}

const getSharedMockup = async (req, res) => {
  const { userId } = req.params;  
try { 
  const mockup = await Usermockup.findAll(  { where: { UserId: userId },include:Mockup}); 
  return res.json(mockup)
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 
}
//CREATE MOCKUPS------------------------------------
const createMockup = async (req, res) => {
    const {userName,imageUrl,createdBy} = req.body
 try {  
    const mockup = await Mockup.create({        
            updated_at: new Date(),
            created_at: new Date(),  
            userName:userName,
            imageUrl:imageUrl,
            createdBy:createdBy      
          });
      return res.json(mockup)    
 } catch (err) {
    console.log(err)
    return res.status(400).json({ error: true, msg: err });    
 }  
}
//EDIT MOCKUPS------------------------------------


const editMockup = async (req, res) => {
  const mockupId = req.params.mockupId
  const {imageUrl,userName} = req.body
  let mockupToEdit = await Mockup.findByPk(mockupId);
  await mockupToEdit.update({imageUrl:imageUrl,userName:userName});
   
try {  
    
  
    return res.json(mockupToEdit)    
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
}  
}

//DELETE MOCKUPS ----------------------------------
const deleteMockup = async (req, res) => {
  const {mockupId} = req.params
try { 
// delete from shared tables first
  const usermockup = await Usermockup.destroy({
    where:{
      MockupId:mockupId}});
// destroy associate feed 
const feed = await Feed.destroy({
  where:{
    MockupId:mockupId}});
    // destroy associate feed 
const story = await Story.destroy({
  where:{
    MockupId:mockupId}});
        // destroy associate filter 
const filter = await Filter.destroy({
  where:{
    MockupId:mockupId}});
    // destroy associate Reel 
const reel = await Reel.destroy({
  where:{
    MockupId:mockupId}});
// then delete from mockup table . 
  const mockup = await Mockup.destroy({
  where:{
   id:mockupId},});
  res.json(mockup)
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 
}
//SHARE MOCKUPS------------------------------------
const shareMockup = async (req, res) => {
  const {email,mockupId} = req.body
try { 
   const user = await User.findOne({ where: { email: email } })    
   const user_mockup = await Usermockup.create({      
      updated_at: new Date(),
      created_at: new Date(),  
      UserId:user.id,
      MockupId:mockupId,
    });  
    return res.json(user_mockup)  
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 
}


//Get single mockup
const getMockup = async (req, res) => {
  const {mockupId} = req.params
try { 
  const mockup = await Mockup.findByPk(mockupId,{include: [Feed,Story,Filter,Reel] } );
  return res.json(mockup)  
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 
}



const createAsset = async (req, res) => {
  const {mockupId,imageUrl} = req.body
try {  
  const asset = await Asset.create({
    updated_at: new Date(),
    created_at: new Date(),  
    MockupId:mockupId,
    imageUrl:imageUrl,
     
});
  res.json(imageUrl)
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 
}

const getAsset = async (req, res) => {
  const {mockupId} = req.body
try {  
  
  const asset = await Asset.findAll({ where: { mockup_id: mockupId } }); 
  res.json(asset)
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 
}

const createReel= async (req, res) => {
  const {mockupId} = req.body
try {  
  const asset = await Reel.create({
    updated_at: new Date(),
    created_at: new Date(),  
    MockupId:mockupId,     
  });
  res.json(mockupId)
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 
}





module.exports = {
    createMockup,
    getMockups,
    getMockup,
    shareMockup,
    getSharedMockup,
    editMockup,
    deleteMockup,
    createAsset,
    getAsset,
    createReel
};
     
