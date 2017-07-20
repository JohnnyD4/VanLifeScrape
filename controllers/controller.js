var express = require('express');

var request = require('request');

var router = express.Router();

router.get("/", function(req, res) {
	// console.log("Home page");

	res.render("home")
})

module.exports = router;