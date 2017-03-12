#!/usr/bin/env node

// ex: args/node.js aaa bbb "ccc dddd"

var argv=new Array();

for(let arg of process.argv){
  argv.push(arg);
}

console.log(process.argv.join(' '));

for (let arg of argv){
  console.log(arg);
}

// ^^^^ process.argv[0] == execPath
// ^^^^ process.argv[1] == file being executed

var argv=new Array();

for(let arg of process.argv.slice(2)){
  argv.push(arg);
}

console.log(process.argv.slice(2).join(' '));

for (let arg of argv){
  console.log(arg);
}
