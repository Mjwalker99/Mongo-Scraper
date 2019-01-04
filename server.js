// Dependencies
const express = require("express");
const bodyParser = require("body-parser"); //JSON responses
const mongoose = require("mongoose"); //Mongo object modelling 
const request = require("request"); //Makes http calls
const cheerio = require("cheerio"); //Scraper
const mongodb = require('mongodb');

// Require all models
const db = require("./models");

ApiKey = "https://api.mlab.com/api/1/heroku_z67sznlb?apiKey=M7T8I9cGDr44fm8eHSpTU0DL7sP0YIDl";

// Port configuration for local/Heroku
const PORT = process.env.PORT || process.argv[2] || 8080;

// Initialize Express
const app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({extended: true }));

// Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));
// Controllers
const router = require("./controllers/api.js");
app.use(router);
// Connect to the Mongo DB

const MONGOLAB_URI = "mongodb://MongoScrapper:MongoScrapper123@ds223760.mlab.com:23760/heroku_z67sznlb";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:/mongoHeadlines";


// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB

mongoose.connect(MONGODB_URI || MONGOLAB_URI || ApiKey);


// Start the server
app.listen(PORT, function () {
    console.log(`This application is running on port: ${PORT}`);
   
});

