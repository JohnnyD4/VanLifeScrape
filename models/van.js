var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var vanSchema = new Schema ({

	title: {
		type: String,
		required: true
	},

	imgLink: {
		type: String,
		required: true
	},

	info: {
		type: String,
		required: true
	},

	comment: {
		type: Schema.types.ObjectId,
		ref: "Comment"
	}
});

var Van = mongoose.model("Van", vanSchema);

module.exports = Van;
