import mongoose from "mongoose";
const { Schema, model } = mongoose;

const blogSchema = new Schema({
	title: String,
	slug: String,
	published: Boolean,
	author: String,
	content: String, //TODO: add a content model to enable rich text
	tags: [String],
	createdAt: Date,
	updatedAt: [Date],
	comments: [
		//TODO: add a comment model and use something like Disqus to handle comments
		{
			user: String,
			content: String,
			votes: Number,
		},
	],
});

const Blog = model("Blog", blogSchema);
export default Blog;
