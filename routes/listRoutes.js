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
        console.log('fired');

        const title = req.body.title;
        const poster = req.body.poster;
        const bannerPath = req.body.bannerPath;
        const year = req.body.year;
        const movieID = req.body.movieID;
        const listID = req.body.list;


        const existingList = await List.findOne({ _id: listID });
        // console.log(existingList.movieIDs);
        // console.log(typeof movieID);
        if(!existingList.movieIDs.includes(movieID.toString())) {
            const newMovie = new Movie({
                title: title,
                poster_path: poster,
                banner_path: bannerPath,
                year: year,
                id: movieID,
                list: existingList._id
            });
            // console.log(newMovie._id);
            // console.log(existingList.movies.includes(newMovie._id));

            newMovie.save();
            existingList.movies.push(newMovie);
            existingList.movieIDs.push(newMovie.id);
            existingList.save();
        }

    });

    app.get('/api/fetch_lists', async (req, res, next) => {
        const userLists = await List.find({user: req.user._id});
        res.send(userLists);
    });

    app.get('/api/lists/:id', async (req, res, next) => {
        const listID = req.params.id;
        // console.log(listID);
        // const list = await List.find({_id: listID});
        const movies = await Movie.find({list: listID}).lean();
        const list = await List.find({_id: listID});
        const author = await User.find({_id: list[0].user});
        movies[0].username = author[0].username;
        movies[0].imageURL = author[0].imageURL;
        res.send(movies);
    });

};
