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

var db = process.env.MONGODB_URI || "mongodb://localhost/espnfc";

mongoose.connect(db, function(error) {

	if (error) {
		throw err
	} else {
		console.log("connected to mongoose");
	}

	
})



app.listen(port, function(err) {
	console.log("log", port);
})
