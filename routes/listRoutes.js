const mongoose = require('mongoose');
const User = mongoose.model('users');
const List = mongoose.model('lists');
const Movie = mongoose.model('movies');

module.exports = app => {
    app.post('/api/create_list', (req, res, next) => {
        const newList = new List({
            title: 'This is a test',
            dateCreated: new Date().toDateString(),
            description: 'A list of truth',
            user: req.user._id});
        newList.save()
    });
};