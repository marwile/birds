/* schema för fåglar*/
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

   //mongoose definiera schema
var BirdsSchema = new Schema({
    birdName: String,
    birdPlace: String,
    birdMonth: String,
    birdYear: Number,
    birdUser: String,
    birdLink: String
});


//exporterar i variabeln Birds
module.exports = mongoose.model("Birds", BirdsSchema);