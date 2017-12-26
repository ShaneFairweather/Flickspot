const mongoose = require('mongoose');
const MovieSchema = mongoose.Schema;
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
    movies: [{type: Schema.ObjectId, ref: 'Movie'}]
});

mongoose.model('lists', ListSchema);
