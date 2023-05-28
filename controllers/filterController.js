const db = require("../db/models/index");

const {Mockup,Usermockup,User,Asset,Reel,Feed,Story,Filter} =db;
 
 
 
const createFilter = async (req, res) => {
  
  const {mockupId} = req.body
try {  

    const filter = await Filter.create({        
        updated_at: new Date(),
        created_at: new Date(),  
        filterName:"Filter Name",
        iconUrl:"https://static.vecteezy.com/system/resources/previews/006/849/610/non_2x/abstract-background-with-soft-gradient-color-and-dynamic-shadow-on-background-background-for-wallpaper-eps-10-free-vector.jpg",
        MockupId:mockupId,
              
      });
  
  res.json(filter)
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 
}


const updateFilter = async (req, res) => {

    const {mockupId,filterName,iconUrl} = req.body     
   try {  
    let filterToEdit = await Filter.update({filterName:filterName,iconUrl:iconUrl},{ where: { MockupId:mockupId} });
      res.json(filterToEdit)
    
     } catch (err) {
    console.log(err)
    return res.status(400).json({ error: true, msg: err });    
  } 
  }

 

 





module.exports = {
    createFilter,
    updateFilter
     
   
};
     
