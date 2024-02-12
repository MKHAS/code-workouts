const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");

const adminLayout = "../views/layouts/admin";

/**
 * GET /
 * Admin - Login Page
 */

router.get("/admin", async (req, res) => {
	try {
		const locals = {
			title: "Admin",
			description: "Simple Blog created with NodeJS, Express and MongoDB",
		};
		res.render("admin/index", { locals, layout: adminLayout });
	} catch (error) {
		console.log(error);
	}
});

router.get("/about", (req, res) => {
	res.render("about");
});

module.exports = router;
