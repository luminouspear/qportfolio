const express = require("express");
const cors = require("cors");
const User = require("./models/User");
const Post = require("./models/Post");
const bcrypt = require("bcryptjs");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const multer = require("multer");
const fs = require("fs");

const uploadMiddleware = multer({ dest: "uploads/" });
const isProduction = process.env.NODE_ENV === "production";

const salt = bcrypt.genSaltSync(10);
const secret = process.env.SECRET;
const port = process.env.PORT || 4000;

const corsOptions = {
	origin:
		process.env.NODE_ENV === "production"
			? "https://danmccollum.com"
			: "http://127.0.0.1:5173",
	credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "build")));
app.use("/uploads", express.static(__dirname + "/uploads"));

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Database connected successfully"))
	.catch((err) => console.error("Database connection error:", err));

app.post("/register", async (req, res) => {
	const { username, password } = req.body;
	try {
		const userDoc = await User.create({
			username,
			password: bcrypt.hashSync(password, salt),
		});
		res.json(userDoc);
	} catch (e) {
		res.status(400).json(e);
	}
});

app.post("/login", async (req, res) => {
	const { username, password } = req.body;
	const userDoc = await User.findOne({ username });
	if (userDoc) {
		const loginSuccess = bcrypt.compareSync(password, userDoc.password);
		console.log("loginSuccess :", loginSuccess);
		if (loginSuccess) {
			//log user in
			jwt.sign(
				{ username, id: userDoc._id },
				secret,
				{},
				(err, token) => {
					if (err) throw err;
					res.cookie("token", token).json({
						id: userDoc._id,
						username,
					});
				}
			);
		} else {
			res.status(404).json({
				message: "Incorrect username or password.",
			});
		}
	} else {
		res.status(404).json({ message: "User not found." });
	}
});

app.get("/profile", (req, res) => {
	const { token } = req.cookies;
	jwt.verify(token, secret, {}, (err, info) => {
		if (err) throw err;
		res.json(info);
	});
});

app.post("/logout", (req, res) => {
	res.cookie("token", "").json("ok");
});

app.post(
	"/createpost",
	uploadMiddleware.single("mainImage"),
	async (req, res) => {
		let filePath = "";

		filePath = getFilePathForfile(req, filePath);

		const { token } = req.cookies;
		jwt.verify(token, secret, {}, async (err, info) => {
			if (err) throw err;
			const { title, summary, content, author, date, tags, featured } =
				req.body;

			const tagArray = tags.split(",").map((tag) => tag.trim());

			const postDoc = await Post.create({
				title,
				author: info.id,
				summary,
				content,
				date,
				mainImage: filePath ? filePath : "",
				tags: tagArray,
				featured,
			});
			res.json(postDoc);
		});
	}
);

app.put("/post", uploadMiddleware.single("mainImage"), async (req, res) => {
	let filePath = "";
	filePath = getFilePathForfile(req, filePath);

	const { token } = req.cookies;
	jwt.verify(token, secret, {}, async (err, info) => {
		if (err) throw err;

		const { id, title, summary, content, author, date, tags, featured } =
			req.body;
		const postDoc = await Post.findById(id);
		const tagArray = tags.split(",").map((tag) => tag.trim());

		const isAuthorSame =
			JSON.stringify(postDoc.author) === JSON.stringify(info.id);

		if (!isAuthorSame) {
			return res.status(400).json("You are not the author");
		}
		await postDoc.updateOne({
			title,
			summary,
			content,
			date,
			tags: tagArray,
			featured,
			mainImage: filePath ? filePath : postDoc.mainImage,
		});

		res.json(postDoc);
	});
});

app.get("/posts", async (req, res) => {
	const defaultLimit = 20;
	const limit = req.query.limit ? parseInt(req.query.limit) : defaultLimit;
	const featuredArticleLimit = req.query.featuredArticles
		? parseInt(req.query.featuredArticles)
		: 0;

	//query /posts?limit=X to get X posts
	//query /posts?featuredArticles=X to get X featured articles.

	let query = Post.find();

	if (featuredArticleLimit > 0) {
		query = query.where("featured", true).limit(featuredArticleLimit);
	} else {
		query = query.limit(limit);
	}

	const posts = await query
		.populate("author", ["username"])
		.sort({ createdAt: -1 });

	res.json(posts);
});

app.get("/post/:id", async (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).json({ error: "Invalid post ID provided." });
	}
	try {
		postDoc = await Post.findById(id).populate("author", ["username"]);
		res.json(postDoc);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

app.delete("/post/:id", async (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).json({ error: "Invalid post ID provided." });
	}

	try {
		const { token } = req.cookies;
		jwt.verify(token, secret, {}, async (err, info) => {
			if (err) throw err;

			const postDoc = await Post.findById(id);
			const isAuthorSame =
				JSON.stringify(postDoc.author) === JSON.stringify(info.id);

			if (!isAuthorSame) {
				return res
					.status(403)
					.json("You are not the author of this post.");
			}

			await Post.findByIdAndDelete(id);
			res.json({ message: "Post deleted successfully." });
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

app.get("*", (req, res) => {
	const indexPath = path.resolve(__dirname, "build", "index.html");

	// const indexPath = isProduction
	// 	? path.resolve(__dirname, "build", "index.html")
	// 	: path.resolve(__dirname, "..", "index.html");
	res.sendFile(indexPath);
});

app.listen(port);
function getFilePathForfile(req, filePath) {
	if (req.file) {
		const { originalname, path } = req.file;
		const parts = originalname.split(".");
		const ext = parts[parts.length - 1];
		filePath = path + "." + ext;
		fs.renameSync(path, filePath);
	}
	return filePath;
}
