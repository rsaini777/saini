const express = require("express");
const router = express.Router();
const Upload = require("../model/upload");
const cloudinary = require("cloudinary");
const fs = require("fs");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
router.post("/upload", async (req, res) => {
  try {
    
    const fileStr = req.body.data;
    

  const data=await cloudinary.v2.uploader.upload(fileStr,{upload_preset:"image-data"})
  
    const image = data.secure_url;
    const upload = new Upload({
      image,
    });
    const newupload = await upload.save();

    res.json({ upload:newupload });
  } catch (error) {
    res.status(500).send(error);
  }
}),
  router.post("/destroy", (req, res) => {
    try {
      const { public_id } = req.body;
      if (!public_id) return res.status(400).send("no file found");

      cloudinary.v2.uploader.destroy(public_id, async (err, result) => {
        if (err) throw err;
        res.json(result);
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = router;
