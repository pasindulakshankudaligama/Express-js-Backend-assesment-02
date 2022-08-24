const express = require("express");
const router = express.Router();
const db = require("../configs/db.config");

const mysql = require("mysql");
const connection = mysql.createConnection(db.database);

connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to the mysql server");
    var orderTbl =
      "CREATE TABLE IF NOT EXISTS Orders(id VARCHAR(255) PRIMARY KEY, date VARCHAR(255), customer_id VARCHAR(255))";
    connection.query(orderTbl, function (err, result) {
      if (err) throw err;
      if (result.warningCount === 0) {
        console.log("Order table created");
      }
    });
  }
});

router.get("/", (req, res) => {
  const query = "SELECT * FROM orders";
  connection.query(query, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});



module.exports = router;
