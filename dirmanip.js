// fs.readdir(path[, option], callback) -> Asynchronous Version
// fs.readdifSync(path[, option]) -> Synchronous Version


const fs = require('fs');
let directory = 'TextFiles';
let dirBuffer = Buffer.from(directory);

// Synchronous Version
// let files = fs.readdirSync(directory,{
//     encoding: 'utf8'
// });

    fs.readdir(directory, (err, files)=>{
        if(err){
            console.log(`Error : ${err}`);
        }
        else{
            console.log(`Files : ${files}`);
        }
    });