// const math = require("./math");

// console.log(math.add(5, 3));
// console.log(math.subtract(10, 4));

// const http = require("http");

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//     console.log(`Server is listening at http://${hostname}:${port}/`)
// });

// const fs = require("fs");

// fs.writeFile("demo.txt", "Hello World", (err) => {
//   if (err) throw err;
//   console.log("File written successfully");
// });

// fs.readFile("demo.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// const bcrypt = require("bcrypt");

// const myPlaintextPassword = "s0//P4$$w0rD";
// const saltRounds = 10;

// bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
//   // Store hash in your password DB.
//   if (err) throw err;
//   console.log(hash);
// });

import { add } from "./math.js";
console.log(add(5, 3));
