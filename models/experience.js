var mongoose = require('mongoose');
var moment = require('moment'); // For date handling.

var Schema = mongoose.Schema;

var ExperienceSchema = new Schema(
    {

    position: {type: String},
    duration:{type:String},
    company: {type: String},
    roleresp:{type:Array,default:[]}
    


    }
  );
exports.about_get = function(req, res) {
    About.find({},)
    .exec(function (err,about_detail) {
      if (err) { return next(err); }
      // Successful, so render
      res.json(about_detail);


    });
};

// Export model.
module.exports = mongoose.model('Experience', ExperienceSchema);
