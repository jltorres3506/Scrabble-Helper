const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const lengthCheck = (val)=>{
    if (val && val.length >= 5){
        return true;
        }
        return false;
};


//makes a mongoose schema which is the structure of the document
const UserSchema = new mongoose.Schema({
 
    userTag: String,
    firstName: {type: String, required: [true, "First Name cannot be left blank!"]},
    lastName:  {type: String, required: [true, "Last Name cannot be left blank!"]},
    passcode:  {type: String, required: [true, "Passcode cannot be left blank!"]},
    password:   {type: String, required: [true, "Password cannot be left blank!"]}

});

const  options ={
    errorMessages:{
        MissingPasswordError: "You dumb Nut A password is needed",
        MissingUsernameError: 'No username was given',
    }
};


//adds passportLocalMongoose plugin to schema
//makes buidling username and password with passport alot easier( less code)
UserSchema.plugin(passportLocalMongoose, options);

//make schema into a model and export it so it can be used in other files
//model is the an interface for doing things with the data such as reading or writing
const User = mongoose.model("User", UserSchema);

exports.User = User