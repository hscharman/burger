//Create methods for the necessary mySQL commands.
//selectAll()
//insertOne()
//updateOne()

//Require the connection. 
var connection = require("./connection.js");

//Functions to create mysql syntax. 
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

//Create orm object for querying. 
var orm = {
  all: function(tableInput, cb) {
    //This query will return *all* rows from burgers table. 
    var queryString = "SELECT * FROM " + tableInput + ";";

    //Actually perform the query. 
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //Insert/create a table entry. Vals = values, cols = columns. 
  //This follows mysql format. 
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    //Query the database to insert the values.
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  //This function will *update* an existing entry. 
  //objColVals = cols and vals we want to update. 
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    //Log the string to console for testing. 
    console.log(queryString);
    //Query database to update the table entry. 
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

//Export orm. 
module.exports = orm;
