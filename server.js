// server.js

//Variables
const express = require('express');
const app = express();
const mongodb = require('mongodb');
const exphbs = require('express-handlebars');
const path = require('path');
const PORT = 5000;
const connectDB = require('./config/db')

connectDB()

//Images
app.use(express.static('views/images'));

//Routes
app.use('/', require('./routes/index.js'));

//Handlebar
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'})); 
app.set('view engine', '.hbs');

//Static folder
app.use(express.static(path.join(__dirname,'public')))

//Ports
app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);

// config
dotenv.config({ path: './config/config.env' })
});
