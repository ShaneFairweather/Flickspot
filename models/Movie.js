const mongoose = require('mongoose');
const { Schema } = mongoose;

const MovieSchema = new Schema({
    title: String,
    poster_path: String,
    banner_path: String,
    year: String,
    id: String,
    list: {type: Schema.ObjectId, ref: 'List', required: true},
});

mongoose.model('movies', MovieSchema);