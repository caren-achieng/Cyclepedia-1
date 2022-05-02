const mongoose = require('mongoose')

const User = new mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phonenumber: {type: String, required: true},
    password: {type: String, required: true, unique: true},   
    quote: {type: String},
},
{collecton: 'users'}
)

const model = mongoose.model('UserData', User)

module.exports = model

