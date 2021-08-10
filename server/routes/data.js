const express=require("express")
const router=express.Router()
const controller=require("../controller/upload")
const controll=require("../controller/image")
router.get("/image/:id",controller.getUpload)//getimage
router.get("/img/:id",controll.getdata)//Download

module.exports=router;