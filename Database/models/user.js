const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: String,

    wallet: {type: Number, default: 0}
})

module.exports = mongoose.model("User", UserSchema)