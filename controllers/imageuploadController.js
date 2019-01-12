const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
var About= require('../models/about.js');
aws.config.update({
    // Your SECRET ACCESS KEY from AWS should go here,
    // Never share it!
    // Setup Env Variable, e.g: process.env.SECRET_ACCESS_KEY
    secretAccessKey: "HsPYZEdCXFLa6DCd+usOw64/rFJfeEhmjQ4JOI8M",
    // Not working key, Your ACCESS KEY ID from AWS should go here,
    // Never share it!
    // Setup Env Variable, e.g: process.env.ACCESS_KEY_ID
    accessKeyId: "AKIAISUM4OVSJWMMH3BA",
    region: 'us-east-1' // region of your bucket
});

const s3 = new aws.S3();


const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'portfolio-abul',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
});

const singleUpload = upload.single('myFile');

exports.s3_upload= [ function(req, res) {
  singleUpload(req, res, function(err, some) {
    if (err) {
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
    }
    About.remove().exec();

console.log(req.file);
        // Data from form is valid.

        // Create an Author object with escaped and trimmed data.
        var about = new About(
            {


              aboutme: req.body.aboutme,
              achievment: req.body.achievment,
              imgurl:req.file.myFile


            });


        about.save(function (err) {
            if (err) { return next(err); }
            // Successful - redirect to new author record.
            //res.redirect(author.url);
            return res.json({'imageUrl': req.file.location});
        });
    
  });
}

];