const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    name : {
        type : String,
    },
    data : {
        type : Buffer,
    },
    contentType : {
        type : String
    }
})

const Image = mongoose.model("Image", ImageSchema);
module.exports = Image;