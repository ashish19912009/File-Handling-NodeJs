// fs.writeFile(file, data[, options], callback) -> Asynchronous
// fs.writeFileSync(file, data[,options]) -> Synchronous
//
//
// options = {
//    encoding,
//    flags,
//    mode
// }

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,"FileToBeWritten.txt");

let data = "This is written from a string\n";
let buf = Buffer.from("This is written from a buffer",'utf8');

// -> Synchronous Version

//fs.writeFileSync(filePath, buf,{flag: 'a'});

// -> Asynchronous Version

  fs.writeFile(filePath, buf,{flag: 'a'},(err)=>{
    console.log(`Data written successfully`);
  });