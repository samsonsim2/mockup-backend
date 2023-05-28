const db = require("../db/models/index");

const {Reel} =db;
 
 
 
const createReel= async (req, res) => {
  
  const {mockupId} = req.body
try {  

    const reel = await Reel.create({        
        updated_at: new Date(),
        created_at: new Date(),  
        caption:"Reels caption",
        cta:"Reels cta",
        MockupId:mockupId,
              
      });
  
  res.json(reel)
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 
}


const updateReel = async (req, res) => {

    const {mockupId,cta,caption} = req.body     
   try {  
    let reelToEdit = await Reel.update({cta:cta,caption:caption},{ where: { MockupId:mockupId} });
      res.json(reelToEdit)
    
     } catch (err) {
    console.log(err)
    return res.status(400).json({ error: true, msg: err });    
  } 
  }

 

 





module.exports = {
    createReel,
    updateReel
     
     
   
};
     
