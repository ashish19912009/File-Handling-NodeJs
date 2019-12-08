const fs = require("fs");
const path = require('path');

const dirFile = path.join(__dirname,"dir.txt");
// const flagsfile = path.join(__dirname,"flags.txt");

let fileSize = fs.statSync(dirFile).size;
// console.log(fileSize);
let buf = new Buffer(fileSize);

// Open File and checking status

// fs.read(fd, buffer, offset, length, postion, callback)
// fs.readSync(fd, buffer, offset, length, postion) -> Synchronous

fs.open(dirFile, "r+", (err, fd) => {
    if(err)
    {
        console.log(`Code: ${err.code}\ message: ${err.message}`);
    }
    else{
        //read
        console.log(`File (${fd}) successfully Opened !`);

       // Synchronous Way
       // let bytes = fs.readSync(fd, buf, 0, fileSize, 0);
       // console.log(`Bytes : ${bytes}`);
       // console.log(`Content: ${buf.toString()}`);
       //
       //
       // Asynchronous Way
       //
       //---------------------------------------------------/

       fs.read(fd, buf, 0, fileSize, 0, (err, bytes)=>{
           if(err)
           {
               console.log(`Error: ${err.message}`);
           }else{
               console.log(`Bytes : ${bytes}`);
               console.log(`Content: ${buf.toString()}`);
           }
       })


       
        fs.close(fd, err=> console.log("file Closed !!!"));
    }
});
