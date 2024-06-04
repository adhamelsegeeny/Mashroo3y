const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },  
    image :{
        type : Schema.Types.ObjectId,
        ref : 'Image'
    }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;