const db = require("../db/models/index");

const {Mockup,Usermockup,User,Asset,Reel,Feed,Story} =db;
 
 
 
const createStory = async (req, res) => {
  
  const {mockupId} = req.body
try {  

    const story = await Story.create({        
        updated_at: new Date(),
        created_at: new Date(),  
        cta:"stories cta",
        location:"Locationss",
        tag:"Add yoursss",
        MockupId:mockupId,
              
      });
  
  res.json(story)
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 
}


const updateStory = async (req, res) => {

    const {mockupId,location,tag,cta} = req.body     
   try {  
    let storyToEdit = await Story.update({location:location,tag:tag,cta:cta},{ where: { MockupId:mockupId} });
      res.json(storyToEdit)
    
     } catch (err) {
    console.log(err)
    return res.status(400).json({ error: true, msg: err });    
  } 
  }

 

 





module.exports = {
    createStory,
    updateStory
   
};
     
