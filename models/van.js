var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var espnSchema = new Schema ({

	title: {
		type: String,
		required: true
	},

	imgSrc: {
		type: String,
		required: true
	},

	// comment: {
	// 	type: Schema.types.ObjectId,
	// 	ref: "Comment"
	// }
});

var ESPN = mongoose.model("ESPN", espnSchema);

module.exports = ESPN;

// console.log("models");