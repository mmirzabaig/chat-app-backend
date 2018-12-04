const express = require('express');
const router = express.Router();

const Post = require('../models/post');
// index route for breweries

// POST route to create Brew Tour

router.get('/mathematics', async (req, res) => {
  try {
    const findPosts = await Post.find({category: 'Mathematics'});
    console.log(findPosts);
    res.json({
      status: 200,
      data: findPosts
    })
  } catch(err) {
    res.send(err);
  }
})

router.get('/compsciewebdes', async (req, res) => {
  try {
    const findPosts = await Post.find({category: 'CompScieWebDes'});
    console.log(findPosts);
    res.json({
      status: 200,
      data: findPosts
    })
  } catch(err) {
    res.send(err);
  }
})

router.get('/science', async (req, res) => {
  try {
    const findPosts = await Post.find({category: 'Science'});
    console.log(findPosts);
    res.json({
      status: 200,
      data: findPosts
    })
  } catch(err) {
    res.send(err);
  }
})

router.get('/books', async (req, res) => {
  try {
    const findPosts = await Post.find({category: 'Books'});
    console.log(findPosts);
    res.json({
      status: 200,
      data: findPosts
    })
  } catch(err) {
    res.send(err);
  }
})

router.get('/philosophy', async (req, res) => {
  try {
    const findPosts = await Post.find({category: 'Philosophy'});
    console.log(findPosts);
    res.json({
      status: 200,
      data: findPosts
    })
  } catch(err) {
    res.send(err);
  }
})

router.get('/music', async (req, res) => {
  try {
    const findPosts = await Post.find({category: 'Music'});
    console.log(findPosts);
    res.json({
      status: 200,
      data: findPosts
    })
  } catch(err) {
    res.send(err);
  }
})



router.post('/', async (req, res) => {
  try {
    const createdPost = await Post.create(req.body);
    console.log(createdPost);
    res.json({
      status: 200,
      data: createdPost
    })
  } catch(err) {
    res.send(err);
  }
})



module.exports = router;
