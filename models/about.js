var mongoose = require('mongoose');
var moment = require('moment'); // For date handling.

var Schema = mongoose.Schema;

var AboutSchema = new Schema(
    {

    aboutme: {type: String},
    achievements: {type : Array , "default" : []},
    myFile: { tdata: Buffer, contentType: String}
    


    }
  );


// Export model.
module.exports = mongoose.model('About', AboutSchema);
