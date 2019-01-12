
var About= require('../models/about.js');
var async = require('async');
var fs = require('fs');
const multer = require('multer');
var upload = multer({ dest: 'uploads/' });

//var imgPath = 'C:/Users/85ehtabu/Desktop/a.png';
//const { body,validationResult } = require('express-validator/check');
//const { sanitizeBody } = require('express-validator/filter');

exports.about_get = function(req, res) {
    About.find({},)
    .exec(function (err,about_detail) {
      if (err) { return next(err); }
      // Successful, so render
      res.json(about_detail);


    });
};
exports.about_create_post = [



    // Process request after validation and sanitization.
    (req, res, next) => {
        //console.log(req.body);
        // Extract the validation errors from a request.
        //const errors = validationResult(req);
        //remove before adding;
        About.remove().exec();


            // Data from form is valid.

            // Create an Author object with escaped and trimmed data.
            var about = new About(
                {

                //descimage :req.body.descimage,
                aboutme: req.body.aboutme,
                achievements: req.body.achievements,
                myFile : req.body.myFile



                });
                debugger;
                //about.descimage.data = fs.readFileSync(req.body.descimage,"'utf8")
                //about.descimage.contentType = "image/jpg";
                console.log(about);
               // console.log(req.body.descimage);
             // about.descimage=req.file.descimage;
              console.log(about);
             // about.descimage.contentType="image/jpg";

            about.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new author record.
                //res.redirect(author.url);
                res.json({message: " Successfull created"});
            });

    }
];

exports.about_update = function(req, res) {
    var message =[{ 'about':
'Hello and welcome to my graduate portfolio. My name is Abul Ehtesham. I was born and raised in Patna, India. I did undrgradutaion from CMRIT,Bangalore,India.My major was Computer Science. I was inclined towards computer since my school days and the world of 1s and 0s always excited and intrigued me. I am currently finishing up my Masters Degree in computer science at the University of Kent.Apart from studying my graduate courses.I am working currenly as Teaching-Assistant for algorithm and programing for computer science department. In myfree time I play chess and learn about new javascript framework'}];
    res.send(message);
};
