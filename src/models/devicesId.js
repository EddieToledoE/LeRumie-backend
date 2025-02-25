const mongoose = require('mongoose');

const DeviceIdSchema = new mongoose.Schema({
    id : {
        type: String,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model("DeviceId", DeviceIdSchema)