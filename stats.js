// *** Uncomment Function call to see output ***//

const fs = require("fs");

const dirFile = "dir.txt";
const flagsfile = "flags.txt";


// Get all the information of File Synchronous way

// fs.statSync(path) -> Synchronous
fs.open(flagsfile,"r+", (err, fd)=>{
    if(err)
    {
        console.log(`Code: ${err.code}\ message: ${err.message}`);
    }
    else{
            const fileStatSync = () =>{
                let stats = fs.statSync(dirFile);
                console.log(stats);
                console.log(`Size - ${stats.size} bytes`);
                console.log(`Is File - ${stats.isFile()}`);
                console.log(`is Directory ${stats.isDirectory()}`);
            } 
            // fileStatSync(); 
            // Get all the information of File Asynchronous way

            // fs.stat(path, callback)

            const fileStat = () => {
                fs.stat(flagsfile,(err, stats)=>{
                    if(err){
                        throw err;
                    } else{
                        console.log(stats);
                    }
                })
            }

            // fileStat();
        }
});