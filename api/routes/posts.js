const router = require("express").Router();
const { response } = require("express");
const postMethod = require("../controllers/postController");

// Create a post

router.post("/", (req, res)=>{
    res.send("Hello World");
});

//Update a post

router.put("/:id", postMethod.updatePostHandler);

//Delete a post
router.delete("/:id", postMethod.deletePostHandler);

// Like a post or dislike a post

router.put("/:id/like", postMethod.likeHandler);

// Get a post

router.get("/:id", postMethod.getPost);

// get timeline posts

router.get("/timeline/:userId", postMethod.getTimeline);

module.exports = router;
