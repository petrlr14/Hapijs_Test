const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    name:String,
    url:String,
});

module.exports=mongoose.model("User", UserSchema);