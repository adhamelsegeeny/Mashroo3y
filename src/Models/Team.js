const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    players: {
        type: [Schema.Types.ObjectId],
        ref: 'User'
    },
    score :{
        type: Number
    },
    isReady :{
        type: [Boolean]
    }
})

const Team = mongoose.model("Team", TeamSchema);
module.exports = Team;