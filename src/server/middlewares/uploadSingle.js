/*jshint esversion: 6*/
const profileImgPathUrl = '/utils/upload/';
var multer = require('multer');

module.exports = {
  uploadSingle: uploadSingle
};

function uploadSingle(req, res, next) {
  // console.log(req.decoded._id);
  var id = req.decoded._id;

  var imgUrl = profileImgPathUrl + id;
  var mime = ['image/jpeg', 'image/png'];
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './utils/upload');
    },
    filename: function (req, file, cb) {
      // console.log('xxxxxxxxxxxxxxx');
      cb(null, Date.now() + '-' + file.originalname);
    }
  });

  var upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 10
    }
  }).single('uploadImage');
  upload(req, res, function (err) {
    if (!req.file) {
      return res.status(403).send('file not found or file is more large!');
    }

    if (mime.indexOf(req.file.mimetype) === -1) {
      return res.status(403).send('not image format!');
    }

    if (err) {
      return res.status(400).send({
        message: 'error in uploading /n' + err
      });
    }
    req.profileImageURL = imgUrl + '/' + req.file.filename;
    next();

  });
}
