const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DareSchema = new Schema({
    name :{
        type: String,
        required: true
    },
    points :{
        type: Number,
        required: true
    }
})