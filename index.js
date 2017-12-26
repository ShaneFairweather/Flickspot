const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/List');
require('./models/Movie');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
    useMongoClient: true
});

const app = express();

app.use(
    cookieSession({
        //in milliseconds
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
//
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json({ type: '*/*' }));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/listRoutes')(app);


const PORT = process.env.PORT || 5000;

app.listen(PORT);