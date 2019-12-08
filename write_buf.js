// fs.write(fd, buffer[, offset[,length[,position]]], callback) -> Asynchronous
// fs.writeSync(fd, buffer[, offset[,length[,position]]]) -> Synchronous

const fs = require("fs");
const path = require('path');
const str = "OFFSETThis is the string I want to write from buffer! \n";
const bufData = path.join(__dirname,"buffData.txt");

const buf = Buffer.from(str, 'utf8');
const offset = 6;
fs.open(bufData,"w", (err, fd)=>{
    if(err)
    {
        console.log(`Code: ${err.code}\ message: ${err.message}`);
    }
    else{
        // File successfully Opened
        console.log(`File (${fd}) successfully Opened !`);
       
        // Synchronous Version

       // let bytes = fs.writeSync(fd, buf, offset, buf.byteLength - offset, 0);
       // console.log(`${bytes} bytes written`);
        
       // Asynchronous Version
       fs.write(fd, buf, offset, buf.byteLength-offset,0, (err,bytes) => {
        if(err)
        {
            console.log(`Error : ${err}`);
        }
         else{
            console.log(`${bytes} bytes written`);
         }
      });
    } 
    fs.close(fd, err=> console.log("file Closed !!!")); 
});

   