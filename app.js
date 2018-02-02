const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
mongoose.Promise = global.Promise;

//get routers
const general = require('./routes/general');
const id = require('./routes/id');

mongoose.connect('mongodb://Dan:password@ds221258.mlab.com:21258/rest_blog');//mongodb://localhost/api
let app = express();

//set up pug
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');

//set middleware
// uncomment after placing favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(compression());
app.use(helmet());
app.use(express.static(path.join(__dirname,'public')));


//set routes using middleware, general and id are routers
app.use('/accounts', general);
app.use('/accounts/:id', id);



app.use(errorHandler());
app.listen(3000);
