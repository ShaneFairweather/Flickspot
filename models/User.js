const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    profileID: String,
    // _id: Number,
    username: String,
    imageURL: String,
    lists: [{
        type: Schema.Types.ObjectId,
        ref: 'List'
    }],
});

mongoose.model('users', userSchema);


