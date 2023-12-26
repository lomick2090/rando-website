"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = void 0;
//Load HTTP module
const http = require("http");
const square = require("./square");
const hostname = '127.0.0.1';
exports.port = '3000';
const string = `The area is ${square.area}`;
const server = http.createServer((req, res) => {
    res.statuscode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`${string}\n`);
});
server.listen(exports.port, hostname, () => {
    console.log(`Server running at http://${hostname}:${exports.port}/`);
});
