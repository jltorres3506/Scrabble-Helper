
const mongoose = require("mongoose");


//Db connection code
//mongoose.connect('mongodb+srv://jose5:Free3506@cluster0-pq6rw.mongodb.net/todoListDB', {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify: false});
 const DB = mongoose.connect('mongodb://localhost:27017/boilerPlateDB', {useNewUrlParser: true, useUnifiedTopology:true,useFindAndModify: false});
mongoose.set("useCreateIndex",true);

//mongoose checking code
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to DB');
  });

  mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
    });
    mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
    });
    process.on('SIGINT', function() {
    mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
    });
    });

    exports = DB;