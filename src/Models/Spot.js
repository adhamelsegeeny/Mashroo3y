const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpotSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            default: [0, 0]
        }
    },
    players: {
        type: [Schema.Types.ObjectId],
        ref: 'User'
    },
    startTime :{
        type: String //HH:MM:SS
    }
})

const Spot = mongoose.model("Spot",SpotSchema);
module.exports = Spot;