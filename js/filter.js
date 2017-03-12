#!/usr/bin/env node

// implement array.prototype.filter using array.prototype.reduce

var filterFn = function(val) {
  return (val != 'skip');
}

var arr=['a','b','skip','c'];

// reduce() skips first index if initial value is not provided - so we provided
//   an empty array
var filterArr=arr.reduce(function(a, val){
  return filterFn(val) ? a.concat(val) : a;
},[]);

console.log(arr);
console.log(filterArr);
