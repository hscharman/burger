//Connect Node to mySQL.
var mysql = require("mysql");
var connection; 

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL); 
}else {
  connection = mysql.createConnection({
  host: "localhost",
  //This is the mysql port. 
  port: 3306,
  user: "root",
  password: "2Acidpops?",
  database: "burgers_db"
}); 
}; 


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export the connection. 
module.exports = connection;

