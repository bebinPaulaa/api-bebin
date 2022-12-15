// (1) Buat Schema User
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    // Schema data
    nama: {
        type: String,
        required: true,
        max: 45
    },
    email: {
        type: String,
        required: true,
        max: 45
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)