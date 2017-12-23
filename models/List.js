const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListSchema = new Schema({
    title: String,
    dateCreated: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

mongoose.model('lists', ListSchema);
