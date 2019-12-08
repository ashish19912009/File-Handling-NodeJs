//  fs.createReadStream(path [, options])
/*
    flags <string>
    encoding <string>
    fd <integer>
    mode <integer>
    autoClose <boolean>
    start <integer>
    end <integer>

    const defaults = {
        flags: 'r',
        encoding: null,
        fd: null,
        mode: 0o666,
        autoClose: true
    };
*/

const fs = require('fs');
const path = require('path');

let readstream = fs.createReadStream(path.join(__dirname,"./TextFiles/buffData.txt"),{highWaterMark:47, encoding:'utf8'});

readstream.on("string", (data)=>{
    console.log(data.split(" "));
})

readstream.on("data", (data)=> {
    if(data.indexOf("buffer") === -1)
    {
        console.log(data.toUpperCase());
        readstream.emit("string", data);
    }
    else{
        console.log(`${data.length}`);
    }
    //console.log(`Data: ${data.toString()}`);
});