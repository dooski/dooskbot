const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const friend = new Schema({
    name: {
        type: String,
        trim: true,
    },
    id: {
        type: String,
        trim: true,
    }
})