var Jimp=require("jimp")

const data=()=>{
    const image= Jimp.read("images/2.jpg")

image.invert()

image.write("images/shape.jpg") 
}


module.exports=data