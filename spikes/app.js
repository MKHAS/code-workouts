const dotenv = require("dotenv").config();
const express = require("express");
const expressLayout = require("express-ejs-layouts");

const connectDB = require("./server/config/db");

const app = express();
const PORT = 5000 || process.env.PORT;

// Connect to DB
connectDB();

// static is serving the public folder allowing us to use it from our ejs files
app.use(express.static("public"));

// Templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/main"));

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
