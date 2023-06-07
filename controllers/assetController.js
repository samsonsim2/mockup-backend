const db = require("../db/models/index");

const {Mockup,Usermockup,User,Asset,Reel,Feed,Story,Filter} =db;
 

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
  const {mockupId} = req.params
try {  
  
  const asset = await Asset.findAll({ where: { mockup_id: mockupId } }); 
  res.json(asset)
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 
}

const deleteAsset = async (req, res) => {
    const {assetId} = req.params
  try {  
    
    const asset = await Asset.destroy({ where: { id: assetId } }); 
    res.json(asset)
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: true, msg: err });    
  } 
  }
 




module.exports = {
   
    createAsset,
    getAsset,
    deleteAsset
   
};
     
