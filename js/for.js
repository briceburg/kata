#!/usr/bin/env node


// test the for..of loop on various iterables
// NOTE: uses template literals `string ${interpolate}...`

// MDN note:  You can use const instead of let too,
//            if you don't reassign the variable inside the block.

var printFn = function(obj){
  var type=typeof(obj);
  for(let val of obj) {
    console.log(`${type}: ${val}`);
  }
}

try{

  printFn(new Array('arr a','arr b'));
  var map=new Map();
  map.set('keyA','keyA val');
  map.set('keyB','keyB val');
  printFn(map);

  var obj={fname: 'errol', lname: 'garner'};
  printFn(obj);

  console.log('complete')




} catch(e){
  console.error('caught exception')
  console.error(e.message);
}
