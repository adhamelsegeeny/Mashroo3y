const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VoucherSchema = new Schema({
    code :{
        type: String,
    },
    discount :{
        type: Number,
    },
    isPercentage :{
        type: Boolean,
    },
    isRedeemed :{
        type: Boolean,
    }
})

module.exports = mongoose.model("Voucher", VoucherSchema);