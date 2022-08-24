const express = require("express");
const router = express.Router();
const db = require("../configs/db.configs");

const mysql = require("mysql");
const connection = mysql.createConnection(db.database);

connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to the mysql server");
    var customerTbl =
      "CREATE TABLE IF NOT EXISTS order_details(order_id VARCHAR(255) PRIMARY KEY, item_id VARCHAR(255), qty INT)";
    connection.query(customerTbl, function (err, result) {
      if (err) throw err;
      if (result.warningCount === 0) {
        console.log("Order_details table created");
      }
    });
  }
});

module.exports = router;