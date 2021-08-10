const Upload = require("../model/upload");


const controller = {
 
  getUpload:async(req,res)=>{
          try {
              const image=await Upload.findById({_id:req.params.id})
              res.status(200).send(image)
              
          } catch (error) {
              res.status(400).send(error)
              
          }
      }
  
};

module.exports = controller;
