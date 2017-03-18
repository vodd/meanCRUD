var express = require('express');
var router = express.Router();
var Post = require('../models/post');


router.get('/', function (req, res, next) {
  Post.find({}, function (err, data) {
    if (err) {
      res.json({
        success: false,
        msg: "nothing to display"
      })
    } else {
      res.json({
        success: true,
        posts: data
      })
    }
  })
});

router.get('/post/:id', function (req, res, next) {
  Post.findById(req.params.id, function (err, data) {
    if (err) {
      res.json({
        success: false,
        msg: "nothing to display"
      })
    } else {
      res.json({
        success: true,
        post: {
          _id:data._id,
          title: data.title,
          des: data.des,
          category: data.category,
        }
      })
    }
  })
});

router.post('/edit/:id', function (req, res, next) {
  Post.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    des: req.body.des,
    category: req.body.category
  }, function (err, numRowsAffected, rawRes) {
    if (err) {
      res.json({
        success: false,
        msg: "failed to regiser"
      })
    } else {
      res.json({
        success: true,
        msg: "user regisered"
      })
    }
  });
});



router.post('/', function (req, res) {
  let post = new Post();

  post.title = req.body.title;
  post.des = req.body.des;
  post.category = req.body.category;

  post.save(function (err, data) {
    if (err) {
      res.json({
        success: false,
        msg: "failed to regiser"
      })
    } else {
      res.json({
        success: true,
        msg: "user regisered"
      })
    }
  })
})

router.get('/delete/:id', function (req, res) {
  Post.findByIdAndRemove(req.params.id, function (err, data) {
    if (err) {
      res.json({
        success: false,
        msg: "error"
      })
    } else {
      res.json({
        success: true,
        msg: "post deleted"
      })
    }
  })
})

module.exports = router;