//Connect Node to mySQL.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  //This is the mysql port. 
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export the connection. 
module.exports = connection;

