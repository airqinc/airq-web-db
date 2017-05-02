var mongoose = require('mongoose'),
// mongoURI = 'mongodb://user:password@localhost:27017/dbOne';
    //mongoURI = 'mongodb://localhost:27017/db_static';
    mongoURI = 'mongodb://albermorap:airQ1234@ds127321.mlab.com:27321/db_static';

module.exports = connect_db_static = mongoose.createConnection(mongoURI);

connect_db_static.on('connected', function() {  
  console.log('Mongoose connected to db_static');
});

require('./models/zone') 