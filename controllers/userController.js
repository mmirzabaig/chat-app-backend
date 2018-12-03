const express = require('express');
const router = express.Router();

const User = require('../models/user');
// index route for breweries

// POST route to create Brew Tour
router.get('/', async (req, res) => {
  try {
    const findUsers = await User.find();
    console.log(findUsers);
    res.json({
      status: 200,
      data: findUsers
    })
  } catch(err) {
    res.send(err);
  }
})

router.post('/', async (req, res) => {
  try {
    const createdUser = await User.create(req.body);
    console.log(createdUser);
    res.json({
      status: 200,
      data: createdUser
    })
  } catch(err) {
    res.send(err);
  }
})


router.post('/upload', (req, res, next) => {
  let uploadFile = req.files.file
  console.log(res);
  const fileName = req.files.file.name
  uploadFile.mv(
    `${__dirname}/public/files/${fileName}`,
    function (err) {
      if (err) {
        return res.status(500).send(err)
      }

      res.json({
        file: `public/${req.files.file.name}`,
      })
    },
  )
})

module.exports = router;
