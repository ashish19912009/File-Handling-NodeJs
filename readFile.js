// fs.readfile(path, {encoding, flag}, callback) - async;
// fs.readfileSync(path, {encoding, flag}) - sync;

// By using (readfile/readfileSync) in nodejs we can directly perform operations on file
// without opening it or closing it.

const fs = require('fs');
const path = require('path');

const flagFile = path.join(__dirname,"flags.txt");

// let data = fs.readFileSync(flagFile,{encoding: 'utf-8'});
// console.log(data);

//   let data = fs.readFileSync(flagFile);
//   console.log(data.toString());

// Asyncronous way

fs.readFile(flagFile, (err, data) => {
    if(err)
    {
        console.log(`Error : ${err}`);
    }
    else{
        console.log(`Content: ${data.toString()}`);
    }
   });