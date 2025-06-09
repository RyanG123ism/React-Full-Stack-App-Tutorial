const express = require('express');
const router = express.Router();
const { Posts } = require('../models'); // Adjust the path as necessary

router.get("/", async (req, res) => {
    const allPosts = await Posts.findAll(); //get all posts
    res.json(allPosts); //returns all posts in json format
});

router.post("/",  async (req, res) => {
    const post = req.body;
    await Posts.create(post)
    res.json(post);
});

module.exports = router;