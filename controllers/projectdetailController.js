var ProjectDetail = require('../models/projectDetail');
var async = require('async');
var Project= require('../models/project.js');


exports.projectDetail_get = function(req, res) {

  ProjectDetail.findOne({ 'project': req.params.id },  function (err, projectDetail) {
    if (err) return handleError(err);
  // Prints "Space Ghost is a talk show host".
  //console.log(projectDetail);
  res.json(projectDetail);
});
};

exports.project_create_detail_post =[
    (req, res, next) => {
        console.log(req.body);
        var projectdetail = new ProjectDetail({
            longdes: req.body.longdes,
            project:req.body.project
        });
        // Data from form is valid. Save book.
        projectdetail.save(function (err) {
            if (err) { return next(err); }
            // Successful - redirect to new author record.
            //res.redirect(author.url);
            res.json({message: " Successfull created"});
        });
      }
];
