const fs = require("fs");

const dirFile = "dir.txt";
const flagsfile = "flags.txt";

// Open File and checking status

// fs.open(path, flag, [mode], callback)
// fs.openSync(path, flag, [mode]) -> Synchronous

fs.open(flagsfile,"r+", (err, fd)=>{
    if(err)
    {
        console.log(`Code: ${err.code}\ message: ${err.message}`);
    }
    else{
        // File successfully Opened
        console.log(`File (${fd}) successfully Opened !`);
        fs.close(fd, err=> console.log("file Closed !!!"));
    }
});