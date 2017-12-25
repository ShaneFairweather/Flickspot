const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListSchema = new Schema({
    title: {type: String, required: true},
    dateCreated: String,
    description: {
        type: String,
        required: false,
        default: "No description added"
    },
    user: {type: Schema.ObjectId, ref: 'User', required: true},
    movies: [{type: Schema.ObjectId, ref: 'List', required: true}],
});

mongoose.model('lists', ListSchema);
