const mongoose = require('mongoose');
const User = mongoose.model('users');
const List = mongoose.model('lists');
const Movie = mongoose.model('movies');

module.exports = app => {
    app.post('/api/create_list', (req, res, next) => {
        const title = req.body.title;
        const description = req.body.description;

        const newList = new List({
            title: title,
            dateCreated: new Date().toDateString(),
            description: description,
            user: req.user._id});
        newList.save();
    });


    app.post('/api/add_movie', (req, res, next) => {
        // const list = req.body.listID;
        const getListID = List.findOne({title: "A Different List"}).exec();
        getListID.then(function(list) {
                    console.log(list._id);
                });

        // getListID('John')
        //     .then(function(city) {
        //         console.log(city);
        //     });
        const newMovie = new Movie({
            title: 'The Movie',
            poster: 'https://thepic.com',
            year: '1982',
            list: list});
        newMovie.save();
    });
};
