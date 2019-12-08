// fs.createStream(path[, options])
/**
 *  const default = {
 *  flag: w,
 *  defaultEncoding: 'utf8',
 *  fd: null,
 *  mode: 0o666,
 *  autoClose: true,
 *  start
 * };
 * 
 */

    const fs = require('fs');
    const path = require('path');

    const data = 'dkd v vkdjvbdfv, dafvnadbfvmnd vdafbv dfmnv damv,dbfvkdmfv dmfdfvhdfbvdmfnvdm,fvdf,v';

    let rwString = fs.createReadStream(path.join(__dirname,'./TextFiles/flags.txt'),{highWatermark: 30});
    let wrString = fs.createWriteStream(path.join('./TextFiles/writeStream.txt'));

    rwString.pipe(wrString);
   // rwString.on("data", (data)=>{
   //     wrString.write(data + "30 bytes written\n", err =>{
   //         if(err)
   //         {
   //             console.log(`Error : ${err}`);
   //         }
   //         else{
   //             console.log("Bytes Written");
   //         }
   //     })
   // });


   // wrString.write(data, (err)=>{
   //         if(err)
   //         {
   //             console.log(`Error ${err}`);
   //         }
   //         else{
   //             console.log("Data Written");
   //         }
   // });