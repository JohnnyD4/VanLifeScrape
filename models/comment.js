var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema ({

	name: {
		type: String,
		trim: true
	},

	title: {
		type: String,
	},

	comment: {
		type: String,
	}
});

var Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
