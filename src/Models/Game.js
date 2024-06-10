const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    name :{
        type: String
    },
    type :{
        type: String,
        enum: ['KNOCKOUT', 'ROUNDS'],
    },
    rounds :{
        type: Number //NULLABLE 
    },
    timer :{
        type: Number //NULLABLE 
    }
})