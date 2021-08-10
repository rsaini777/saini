var jimp = require('jimp');
const Upload = require("../model/upload");
const axios =require("axios")

const controller={
    getdata:async (req,res)=>{
         res.type('jpg');
         const image=await Upload.findById({_id:req.params.id})
         const id=image._id
         
         axios({
             method:"GET",
             url:`http://localhost:4500/api/image/${id}`
         })
         .then(result=>{
             const data=result.data.image
              jimp.read(data, (err, lenna) => { //url
                if (err) throw err; 
                lenna.resize(256, 256) // resize
                .quality(60) // set JPEG quality
                .greyscale() // set greyscale
                .write('output.jpg', res.download('output.jpg')); // save
            });
         })
         .catch(err=>{
             console.log(err)
         })
         
    
    
    }
}



module.exports=controller