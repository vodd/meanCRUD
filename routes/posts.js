var express = require('express');
var router = express.Router();
var Post = require('../models/post');
var multer = require("multer");


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
          _id: data._id,
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

/** API path that will upload the files */
router.post('/upload', function (req, res) {
  var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
      var datetimestamp = Date.now();      
      cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
      //cb(null,req.body.id+'.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
  });

  var upload = multer({ //multer settings
    storage: storage
  }).single('file');
  upload(req, res, function (err) {
 
    if (err) {
      res.json({
        error_code: 1,
        err_desc: err
      });
      return;
    }
    res.json({
      error_code: 0,
      err_desc: null
    });
  });
});


module.exports = router;