var Experience= require('../models/experience.js');
//var ProjectDetail = require('../models/projectDetail.js');
var async = require('async');


exports.exp_get = function(req, res) {
    Experience.find({},)
    .exec(function (err,about_detail) {
      if (err) { return next(err); }
      // Successful, so render
      res.json(about_detail);


    });
};
exports.experience_create_post =[
    (req, res, next) => {
        console.log(req.body);
        var experience = new Experience({
            duration:req.body.duration,
            position: req.body.position,
            company: req.body.company,
            roleresp: req.body.roleresp

        });
        // Data from form is valid. Save book.
        experience.save(function (err) {
            if (err) { return next(err); }
            // Successful - redirect to new author record.
            //res.redirect(author.url);
            res.json({message: " Successfull created"});
        });
      }
];