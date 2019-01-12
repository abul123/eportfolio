var mongoose = require('mongoose');

var moment = require('moment'); // For date handling.

var Schema = mongoose.Schema;

var ProjectSchema = new Schema (
  {
      title:{ type:String},
      skill:{type : Array , "default" : []},
      
      description:{type : Array , "default" : []}
  }
);

ProjectSchema
.virtual('url')
.get(function () {
  return '/portfolio/project/'+this._id;
});

module.exports = mongoose.model('Project', ProjectSchema);
