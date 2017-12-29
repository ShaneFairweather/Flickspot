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


    app.post('/api/add_movie', async (req, res, next) => {
        // const list = req.body.listID;
        const existingList = await List.findOne({ title: "The Big List" });
        console.log(existingList);
        // const getListID = List.findOne({title: "A Different List"}).exec();
        // getListID.then(function(list) {
        //             // function() {
        //             //     return list._id;
        //             // }
        //         });

        // getListID('John')
        //     .then(function(city) {
        //         console.log(city);
        //     });
        const newMovie = new Movie({
            title: 'The Movie',
            poster: 'https://thepic.com',
            year: '1982',
            list: existingList._id
        });
        newMovie.save();
        existingList.movies.push(newMovie);
        existingList.save();
    });

    app.get('/api/fetch_lists', async (req, res, next) => {
        const userLists = await List.find({user: req.user._id});
        // console.log(userLists);
        res.send(userLists);
    });

    app.get('/api/lists/:id', async (req, res, next) => {
        console.log('fired');
        const listID = req.params.id;
        // console.log(listID);
        // const list = await List.find({_id: listID});
        const movies = await Movie.find({list: listID});
        res.send(movies);
        // console.log(movies);
        // res.send(list);
    });
};
