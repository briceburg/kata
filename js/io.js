#!/usr/bin/env node

var fs = require('fs');


var file = process.argv[2] || null;
if(!file){
  console.error('please provide a filename as first argument');
  process.exit(1);
}

// @NOTE - fs.writeFile supports writing directly to path...
//         playing w/ promises here.

var openFile = new Promise((resolve, reject) => {
  fs.open(file,'a+',(err, fd) => {
    if(err){
      console.error(`unable to open ${path} for appening...`);
      return reject(err);
    }
    resolve(fd);
  });
}).then((fd) => {
  console.error(`got fd for ${file}`);
  writeFile(fd);

}).catch((err) => {
  console.err('something went wrong', err);
  process.exit(1);
});

// @NOTE - fs.createWriteStream is more usable

var writeFile = function(fd){
  fs.write(fd, "appended by node\n", (err, bytes, str) => {
    if(err){
      throw err;
    }
    console.error(`${bytes} bytes written`);
  });
}
