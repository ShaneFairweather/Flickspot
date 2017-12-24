const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListSchema = new Schema({
    title: {type: String, required: true},
    dateCreated: String,
    description: String,
    user: {type: Schema.ObjectId, ref: 'User', required: true}

});

mongoose.model('lists', ListSchema);
