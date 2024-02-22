const dotenv = require("dotenv").config();
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const session = require("express-session");

const connectDB = require("./server/config/db");

const app = express();
const PORT = 5000 || process.env.PORT;

// Connect to DB
connectDB();

//Enable us to pass data through forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Other middleware
app.use(cookieParser());
app.use(methodOverride("_method")); //lets us use HTML methods where we normally woulnd't be able to

// Session settings
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: true,
		store: MongoStore.create({
			mongoUrl: process.env.MONGODB_URI,
		}),
	})
);

// static is serving the public folder allowing us to use it from our ejs files
app.use(express.static("public"));

// Templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/main"));
app.use("/", require("./server/routes/admin"));

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
