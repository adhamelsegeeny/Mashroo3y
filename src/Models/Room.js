const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    teams :{
        type: [Schema.Types.ObjectId],
        ref: 'Team'
    },
    game :{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    },
    dares :{
        type: [Schema.Types.ObjectId],
        ref: 'Dare'
    },
    spot :{
        type: Schema.Types.ObjectId,
        ref: 'Spot'
    },
    date :{
        type: Date
    }
})

const Room = mongoose.model("Room", RoomSchema);
module.exports = Room;