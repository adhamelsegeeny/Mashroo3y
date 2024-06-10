const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SponsorSchema = new Schema({
    name :{
        type: String,
        required: true
    },
    logo :{
        type: String,
        required: true
    }
})

const Sponsor = mongoose.model("Sponsor",SponsorSchema);
module.exports = Sponsor;