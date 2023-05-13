const db = require("../db/models/index");

const {Mockup,Usermockup,User} =db;
 
const getAllMockup = async (req, res) => {
   const {userId} = req.body
    
try {
 //  create a mock up in mockup table
  const mockup = await Mockup.findAll({ where: { createdBy: userId } });    
  return res.json(mockup)
  
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 


}
const createMockup = async (req, res) => {
    const {userName,imageUrl,createdBy} = req.body
 try {
   //  create a mock up in mockup table
    const mockup = await Mockup.create({
        
            updated_at: new Date(),
            created_at: new Date(),  
            userName:userName,
            imageUrl:imageUrl,
            createdBy:createdBy
            
        
      });
      // attach it to the associated user 
    //  const user_mockup = await Usermockup.create({
        
    //     updated_at: new Date(),
    //     created_at: new Date(),  
    //     UserId:userId,
    //     MockupId:mockup.id,
    
    // });
    

      return res.json(mockup)
    
 } catch (err) {
    console.log(err)
    return res.status(400).json({ error: true, msg: err });    
 } 
 

 
}


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

const getSharedMockup = async (req, res) => {
  const {userId} = req.body
try { 

  const mockup = await Usermockup.findAll({include:Mockup},{ where: { UserId: userId }}); 
 
 

  return res.json(mockup)
  

    
  
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 



}


const editMockup = async (req, res) => {
  const {mockupId} = req.body
try { 

  const mockup = await Mockup.findByPk(mockupId);
  return res.json(mockup)
  

    
  
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 
}

const deleteMockup = async (req, res) => {
  const {mockupId} = req.body
try { 
// delete from shared tables first
  const usermockup = await Usermockup.destroy({
    where:{
      MockupId:mockupId}});

// then delete from mockup table . ask sam if theres a equivalent of cascade for m-m relationship
  const mockup = await Mockup.destroy({
  where:{
   id:mockupId},});

    
  res.json(mockupId)
} catch (err) {
  console.log(err)
  return res.status(400).json({ error: true, msg: err });    
} 



}





module.exports = {
    createMockup,
    getAllMockup,
    shareMockup,
    getSharedMockup,
    editMockup,
    deleteMockup
};
     
