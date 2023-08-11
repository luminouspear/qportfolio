const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = new Schema(
	{
		title: String,
		author: {type:Schema.Types.ObjectId, ref: 'User'},
		date: String,
		summary: String,
		content: String,
		mainImage: String,
		tags: [String],
		featured: Boolean,
	},
	{ timestamps: true }
);

const PostModel = model("Post", PostSchema);

module.exports = PostModel;
