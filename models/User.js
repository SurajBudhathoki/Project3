const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({

    username : {
        type: String,
        trim: true,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    avatar : {
        type: String
    }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
