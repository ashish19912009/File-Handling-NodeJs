// fs.write(fd, string[, position[,encoding]], callback) -> Asynchronous
// fs.writeSync(fd, string[, position[,encoding]]) -> Synchronous

const fs = require("fs");
const str = "This is the string I want to write! \n";
const path = require('path');
const dirFile = path.join(__dirname,"testing.txt");

fs.open(dirFile,"a", (err, fd)=>{
    if(err)
    {
        console.log(`Code: ${err.code}\ message: ${err.message}`);
    }
    else{
        // File successfully Opened
        console.log(`File (${fd}) successfully Opened !`);

        // Synchronous Version

        // let bytes = fs.writeSync(fd, str);
        // console.log(`${bytes} bytes written`);

        // Asynchronous Version
        fs.write(fd, str, (err,bytes)=>{
            if(err){
                console.log(`Error: ${err}`);
            }
            else{
                console.log(`${bytes} bytes written`);
            }
        });

    }
    fs.close(fd, err=> console.log("file Closed !!!"));  
});

   