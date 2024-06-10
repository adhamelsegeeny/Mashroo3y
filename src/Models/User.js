const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    image: {
        type: Schema.Types.ObjectId,
        ref: 'Image'
    },
    birthDate: {
        type: Date
    },
    gender: {
        type: String
    },
    fullName: {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        }
    },
    points :{
        type: Number
    },
    vouchers :{
        type: [Schema.Types.ObjectId],
        ref: 'Voucher'
    }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;