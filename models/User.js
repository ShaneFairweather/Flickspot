const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    profileID: String,
    username: String,
    imageURL: String
});

mongoose.model('users', userSchema);
