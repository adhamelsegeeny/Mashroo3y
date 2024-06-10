const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DailyPlaySchema = new Schema({
    date :{
        type: Date,
    },
    rooms :{
        type: [Schema.Types.ObjectId],
        ref: 'Room',
    },
})

const DailyPlay = mongoose.model("DailyPlay", DailyPlaySchema);
module.exports = DailyPlay;