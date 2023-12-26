//Load HTTP module
const http = require("http");
const square = require("./square")
const hostname = '127.0.0.1';
export const port = '3000';

const string = `The area is ${square.area}`

const server = http.createServer((req: any, res: any) => {
  res.statuscode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`${string}\n`);
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})