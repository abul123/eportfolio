var mongoose = require('mongoose');
var moment = require('moment'); // For date handling.

var Schema = mongoose.Schema;

var ProjectDetailSchema = new Schema (
  {
      project: { type: Schema.ObjectId, ref: 'Project' },
      longdes:{type : Array , "default" : []}
  }
);



module.exports = mongoose.model('ProjectDetail', ProjectDetailSchema);
