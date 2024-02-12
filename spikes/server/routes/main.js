const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Routes

// GET HOME
router.get("", async (req, res) => {
	try {
		const locals = {
			title: "NodeJS Blog",
			description: "Simple Blog created with NodeJS, Express and MongoDB",
		};

		//blog posts per page
		let perPage = 10;

		//query.page gets the home/page-2 on the blog otherwise we get the first page
		let page = req.query.page || 1;

		const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
			.skip(perPage * page - perPage)
			.limit(perPage)
			.exec();

		const count = await Post.countDocuments();
		const nextPage = parseInt(page) + 1;
		const hasNextPage = nextPage <= Math.ceil(count / perPage);

		//local and data are passed into the index.js "component"
		res.render("index", {
			locals,
			data,
			current: page,
			nextPage: hasNextPage ? nextPage : null,
		});
	} catch (error) {
		console.log(error);
	}
});

router.get("/about", (req, res) => {
	res.render("about");
});

// Get Home Without Pagination
// router.get("", async (req, res) => {
// 	const locals = {
// 		title: "NodeJS Blog",
// 		description: "Simple Blog created with NodeJS, Express and MongoDB",
// 	};

// 	try {
// 		const data = await Post.find();
// 		//local and data are passed into the index.js "component"
// 		res.render("index", { locals, data });
// 	} catch (error) {
// 		console.log(error);
// 	}
// });

// router.get("/about", (req, res) => {
// 	res.render("about");
// });

/**
 * GET /
 * Post :id
 */

router.get("/post/:id", async (req, res) => {
	try {
		let slug = req.params.id;

		const data = await Post.findById({ _id: slug });

		const locals = {
			title: data.title,
			//TODO: incorporate short description into db schema
			description: "Simple Blog created with NodeJS, Express and MongoDB",
		};

		res.render("post", { locals, data });
	} catch (error) {
		console.log(error);
	}
});

/**
 * POST /
 * Post - searchTerm
 */

router.post("/search", async (req, res) => {
	try {
		const locals = {
			title: "Search",
			description: "Simple Blog created with NodeJS, Express and MongoDB",
		};

		let searchTerm = req.body.searchTerm;

		console.log(searchTerm);

		// const data = await Post.find();
		res.send(searchTerm);
	} catch (error) {
		console.log(error);
	}
});

router.get("/about", (req, res) => {
	res.render("about");
});

// router.get("/about", (req, res) => {
// 	res.render("about");
// });

// Initial Test Data insertion
// function insertPostData() {
// 	Post.insertMany([
// 		{
// 			title: "Test 1: Inserting a blog post",
// 			body: "I'm inserting some blog posts to make sure mongo works!",
// 		},
// 		{
// 			title: "Test 2: Inserting another blog post",
// 			body: "Still inserting",
// 		},
// 		{
// 			title: "Test 3: Inserting one last blog post",
// 			body: "That should be all of them",
// 		},
// 	]);
// }
// insertPostData();

module.exports = router;
