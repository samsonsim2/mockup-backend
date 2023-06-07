const db = require("../db/models/index");

const {Mockup,Usermockup,User,Asset,Reel,Feed} =db;
 
 
 
const createFeed = async (req, res) => {
  
  const {mockupId} = req.body
try {  

    const feed = await Feed.create({        
        updated_at: new Date(),
        created_at: new Date(),  
        caption:"Lorem Ipsum Dolor",
        cta:"Learn more",
        MockupId:mockupId,
              
      });
  
  res.json("hi")
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 
}


const updateFeed = async (req, res) => {

    const {mockupId,caption,cta} = req.body

    let feedToEdit = await Feed.findByPk(mockupId);
    await feedToEdit.update({caption:caption,cta:cta});
    
  try {  
     
    res.json(feedToEdit)
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: true, msg: err });    
  } 
  }

 

 





module.exports = {
    createFeed,
    updateFeed
   
};
     
