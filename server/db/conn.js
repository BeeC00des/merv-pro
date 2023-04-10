const { MongoClient } = require("mongodb");

const Db ="mongodb+srv://beecoodes:beecoodes@cluster0.jwhgjnj.mongodb.net/employees?retryWrites=true&w=majority";
// process.env.ATLAS_URI;
// console.log(Db);
const client =new MongoClient(Db, {useNewUrlParser: true,useUnifiedTopology: true,});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("employees");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};