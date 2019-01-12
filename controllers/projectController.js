var Project= require('../models/project.js');
var ProjectDetail = require('../models/projectDetail');
//var ProjectDetail = require('../models/projectDetail.js');
var async = require('async');

exports.projectDetails_get = function(req, res) {

    ProjectDetail.findOne({ 'project': req.params.id },  function (err, projectDetail) {
      if (err) return handleError(err);
    // Prints "Space Ghost is a talk show host".
    //console.log(projectDetail);
    res.json(projectDetail);
  });
  };
exports.project_get = function(req, res) {
    Project.find({})
    .exec(function (err,project_detail) {
      if (err) { return next(err); }
      // Successful, so render
      res.json(project_detail);
      console.log(project_detail.url);

    });
};
exports.project_create_post =[
    (req, res, next) => {
        console.log(req.body);
        var project = new Project({
          title: req.body.title,
          skill: req.body.skill,
          description: req.body.description

        });
        // Data from form is valid. Save book.
        project.save(function (err) {
            if (err) { return next(err); }
            // Successful - redirect to new author record.
            //res.redirect(author.url);
            res.json({message: " Successfull created"});
        });
      }
];
