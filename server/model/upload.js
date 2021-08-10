const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    image:{
        type:Object,
        
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Upload", UserSchema);
