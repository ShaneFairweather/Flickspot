const mongoose = require('mongoose');
const List = mongoose.model('lists');
const User = mongoose.model('users');
// const MovieSchema = require('./Movie.js');

module.exports = app => {
    app.post('/api/create_list', (req, res, next) => {
        User.findById(req.user._id, (err, user) => {
            if (err) (
                console.log(err)
            );
            const newList = {
                title: req.body.title,
                dateCreated: new Date().toDateString(),
                author: req.user._id
            };

            List.create(newList, (err, post) => {
                if (err) {
                    res.redirect('/');
                    console.log(err)
                }

                user.lists.push(newList);
                user.save((err) => {
                    return res.redirect('/');
                });
            })
        });
    });
};