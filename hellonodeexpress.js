"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const wiki = require('./wiki');
const logger = require("morgan");
const hellonode_1 = require("./hellonode");
const MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/animals", (err, client) => {
    if (err)
        throw err;
    const db = client.db("animals");
    db.collection("mammals")
        .find()
        .toArray((err, result) => {
        if (err)
            throw err;
        console.log(result);
        client.close();
    });
});
const width = 4;
const square = require("./square");
const string = `The area is ${square.area(width)}`;
console.log(string);
// app.get("/", function (req : any, res: any) {
//     res.send(`${string}`);
//   });
// app.get("/about", (req: any, res: any) => {
//   res.send("Abput page")
// })
//app.use("/", wiki);
app.use("/", logger("dev"));
app.listen(hellonode_1.port, function () {
    console.log(`Example app listening on port ${hellonode_1.port}!`);
});
