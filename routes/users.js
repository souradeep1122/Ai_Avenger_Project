const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/hello");



const userchema = mongoose.Schema({
  name: {
    type: String,
    required: true
},
imageLink1: {
    type: String,
    required: true
},
imageLink2: {
  type: String,
  required: true
},
site: {
    type: String,
    required: true
},
description1: {
    type: String,
    required: true
},
description2: {
  type: String,
  required: true
},
locationLink: {
    type: String,
    required: true
}
});

//module.exports = mongoose.model("Galley",userchema2);
module.exports = mongoose.model("data",userchema);
//const userchemaa22 = mongoose.model("Gallery",userchema2);
//const userchemaa11 = mongoose.model("data",userchema);


