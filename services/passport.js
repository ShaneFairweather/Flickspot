const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

const keys = require('../config/keys');


passport.serializeUser((user, done) => {
    // user.id refers to the id assigned by MongoDB, not the OAuth (google, facebook, etc) id.
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        const image = profile._json.image.url;
        console.log(profile);
        const existingUser = await User.findOne({ profileID: profile.id });
        console.log(existingUser);
        if(existingUser) {
            return done(null, existingUser);
        }
        const user = await new User({
            profileID: profile.id,
            username: profile.displayName,
            imageURL: image.slice(0, image.length - 2) + '250'
        }).save();
        done(null, user);
    }
    )
);


passport.use(
    new FacebookStrategy({
            clientID: keys.facebookClientID,
            clientSecret: keys.facebookClientSecret,
            callbackURL: '/auth/facebook/callback',
            profileFields: ['id', 'displayName', 'picture.type(large)'],
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile);
            const existingUser = await User.findOne({ profileID: profile.id });
            if(existingUser) {
                return done(null, existingUser);
            }
            const user = await new User({
                profileID: profile.id,
                username: profile.displayName,
                imageURL: profile.photos[0].value
            }).save();
            done(null, user);

        }
    )
);


passport.use(
    new GithubStrategy({
            clientID: keys.githubClientID,
            clientSecret: keys.githubClientSecret,
            callbackURL: '/auth/github/callback',
            profileFields: ['id', 'displayName', 'picture.type(large)'],
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile);
            const existingUser = await User.findOne({profileID: profile.id});
            if(existingUser) {
                return done(null, existingUser);
            }
            const user = await new User({
                profileID: profile.id,
                username: profile.displayName,
                imageURL: profile.photos[0].value
            }).save();
            done(null, user);
        }
    )
);