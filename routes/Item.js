const express = require("express");
const router = express.Router();
const db =require("../configs/db.config");

const mysql =require("mysql");
const req = require("express/lib/request");
const res = require("express/lib/response");
const connection = mysql.createConnection(db.database);

connection.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("connected to the mysql server");
        var itemTbl="CREATE TABLE IF NOT EXISTs Item(id VARCHAR(255)PRIMARY KEY, name VARCHAR(255), qty INT, price DOUBLE)";
        connection.query(itemTbl,function(err,result){
            if (err) throw err;
            if(result.warningCount === 0){
                console.log("Item table created");
            }
        });
    }
});

router.get("/",(req,res)=>{
    const query ="SELECT * FROM item";
    connection.query(query,(err,rows)=>{
        if(err) throw err;
        res.send(rows);
    });
});

router.post("/",(req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const qty = req.body.qty;
    const price = req.body.price;

    const query = ""
});

module.exports = router;