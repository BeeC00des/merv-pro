// const { MongoClient } = require("mongodb");

// const Db ="mongodb+srv://beecoodes:beecoodes@cluster0.jwhgjnj.mongodb.net/employees?retryWrites=true&w=majority";
// // process.env.ATLAS_URI;
// // console.log(Db);
// const client =new MongoClient(Db, {useNewUrlParser: true,useUnifiedTopology: true,});
// // console.log(client)
 
// var _db;

// module.exports = {

//   connectToServer: 
//     function (callback) {
//       client.connect(function (err, db) {
//         console.log(err);
//         console.log(db);
//         // Verify we got a good "db" object
//         if (db)
//         {
//           console.log(db);
//           _db = db.db("employees");
//           console.log("Successfully connected to MongoDB."); 
//         }
//         return callback(err);
//           });
//     },
 
//   getDb: 
//   function () {
//       return _db;
//     }

// };
 


const MongoClient = require('mongodb').MongoClient;

function connectToMongoDB(callback) {
  // Connection URL and database name
  const url = 'mongodb+srv://beecoodes:beecoodes@cluster0.jwhgjnj.mongodb.net/employees?retryWrites=true&w=majority';
  const dbName = 'employees';

  // Create a new MongoClient
  const client = new MongoClient(url, { useUnifiedTopology: true });

  // Connect to the MongoDB server
  client.connect(function(err) {
    if (err) {
      console.error('Failed to connect to MongoDB:', err);
      return callback(err);
    }

    console.log('Connected successfully to MongoDB');

    // Get the database object
    const db = client.db(dbName);

    // Call the callback function with the db object
    callback(null, db);

    // Close the client
    client.close();
  });
}

module.exports = connectToMongoDB;
