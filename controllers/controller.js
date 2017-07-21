var express = require('express');

var request = require('request');

var cheerio = require('cheerio');

var router = express.Router();

var ESPN = require("../models/van");

var Comment = require("../models/comment");

// mongoose.conect("mongodb://localhost/espnfc");

// var db = mongoose.connection;

// db.on("error", function(error) {
// 	console.log("Mongoose error:", error);
// });

// db.once("open", function() {
// 	console.log("Mongoose connected");
// })

	router.get("/", function(req, res) {

	res.render("home")
})



router.get("/scrape", function(req, res) {
	
	request("http://www.espnfc.us/", function(err, response, html) {

		if (err) throw err;

		var $ = cheerio.load(html);

		$("div.thumbnail").each(function(i, element) {

			var result = {};

			result.title = $(this).children("a").children("img").attr("alt");

			result.imgSrc = $(this).children("a").children("img").attr("src");			
			
			if (result.imgSrc !== undefined && result.title !== undefined) {
					
				console.log(result);

				var entry = new ESPN(result);

				entry.save(function(err,doc) {

					if (err) throw err;

					console.log(doc);
				})
				
			};
	
		});
	});

	res.redirect("/");
});

router.get("/images", function(req, res) {

	ESPN.find({})
	.populate("Comment")
	.exec(function(err, doc) {

		if (err) throw err;

		res.json(doc)
	})

})

router.get("/images/:id", function(req, res) {

	console.log(req.params.id);
	// ESPN.findOne({ "_id": req.params.id})
})


module.exports = router;