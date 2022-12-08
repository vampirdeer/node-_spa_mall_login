const express = require("express");
const router = express.Router();

const postsController = require("./posts");
const commentsController = require("./comments");
const userscontroller = require("./users");

router.use("/", userscontroller);
router.use("/posts", postsController);
router.use("/comments", commentsController);

module.exports = router;
