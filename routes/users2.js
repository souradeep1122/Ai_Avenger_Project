const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/hello");
const userchema2 = mongoose.Schema({
    GalleryImg: {
      type: String,
      required: true
  }
  });
module.exports = mongoose.model("Galley",userchema2);