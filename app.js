// modules
var express = require('express');
var app = express();
var firebase = require('firebase-admin');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var session = require('express-session');
var uuid = require('uuid/v4');
var expressValidator = require('express-validator');
var passport = require('passport');
var bodyParser = require('body-parser');
var fileupload = require('express-fileupload');
var FileStore = require('session-file-store')(session);
var method_override = require('method-override');
var sweetalert = require('sweetalert');


// loading the json files
var farmerDataFile = require('./app/data/farmers_data.json');
var availableProductData = require('./app/data/available_products.json');
var sponsoredData = require('./app/data/sponsored_farmers.json');
var unsponsoredData = require('./app/data/unsponsored_farmers.json');
var info = require('./app/data/infos.json');


// getting the sevicekey
var serviceAccount = require('./greentaCollectServiceAccountKey.json');

// initializing the app
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://greenta-collect.firebaseio.com"
});

//connecting to mongodb
// OFFLINE CONNECTION
// mongoose.connect('mongodb://localhost/amisapp', { useNewUrlParser: true })
//     .then(() => console.log('MongoDB Local Connection Successful'))
//     .catch(err => console.log(err));

// ONLINE CONNECTION TO MONGO
mongoose.connect('mongodb+srv://milton:' + process.env.MONGO_ADMIN_PW + '@amis-cluster-fsefr.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connection Successful'))
    .catch(err => console.log(err));

// getting access to the database
var db = firebase.database();
var ref = db.ref('greenta-collect'); //making a reference of the database

// app.set('varRef',ref);
var usersRef = ref.child("farmers");
usersRef.set({});

//setting an environment variable
app.set('port', process.env.PORT || 3000);

//setting up a view engine
app.set('view engine', 'ejs');
app.set('views', './app/views'); //specifying the view folder location

app.locals.siteTitle = 'AMIS-WEB-APP';

//accessing the static files
app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// setting the headers
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Acess-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorized");

//     if (req.method == 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
//     next();
// });

// method override
app.use(method_override('newMethod'));

app.set('appData', farmerDataFile);
app.set('availableProducts', availableProductData);
app.set('info', info);
app.set('appData_3', sponsoredData);
app.set('appData_4', unsponsoredData);

// Express Validator Middleware
// app.use(expressValidator());
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;

        while (namespace.length) {
            formParam += '[' + namesapce.shift() + ']';
        }
        return {
            param: formParam,
            message: msg,
            value: value
        };
    }
}));

// Body parser Middleware
app.use(cookieParser());

// Express Session Middleware
app.use(session({
    // genid: (req) => {
    //     console.log('Inside the session middleware')
    //     console.log(req.sessionID)
    //     return uuid() // use UUIDs for session IDs
    // },
    // store: new FileStore(),
    secret: 'secret-key',
    saveUninitialized: true,
    resave: false
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash Middleware
app.use(flash());

// fileupload middleware
app.use(fileupload());

// sweet alert middleware
// app.use(sweetalert());

// Flash Middleware Global Variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});


// Creating access to the routes
const adminRoutes = require('./app/routes/adminRoutes');
const defaultRoutes = require('./app/routes/defaultRoutes');

app.use('/', defaultRoutes);
app.use('/admin', adminRoutes);

//listening to the 3000 port
var server = app.listen(app.get('port'), function() {
    console.log('listening on port ' + app.get('port'));
});