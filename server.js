var express = require('express');

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var cheerio = require('cheerio');

var request = require('request');

var exphbs = require('express-handlebars');

var routes = require('./controllers/controller.js')

mongoose.Promise = Promise;

var app = express();

var port = process.env.port || 3000;

app.use("/", routes);

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.engine("handlebars", exphbs({defaultLayout: "main"}));

app.set("view engine", "handlebars");

mongoose.connect("mongodb://localhost/espnfc");

var db = mongoose.connection;

db.on("error", function(error) {
	console.log("Mongoose error:", error);
})

db.once("open", function() {
	console.log("Mongoose connection succesful");
})

app.listen(port, function(err) {
	console.log(port);
})
