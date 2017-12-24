const mongoose = require('mongoose');
const { Schema } = mongoose;

const MovieSchema = new Schema({
    title: String,
    poster: String,
    year: String,
    list: {type: Schema.ObjectId, ref: 'List', required: true}
});

mongoose.model('movies', movieSchema);