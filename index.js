require("dotenv").config();

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "musicDB"
});

var argOne = process.argv[2];
var argTwo = process.argv[3];

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  if (argOne === "genre") {
    connection.query("SELECT * FROM songs WHERE genre=?", [argTwo], function (err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    })
  } else if (!argOne) {
    connection.query("SELECT * FROM songs", function (err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    })
  }
}
