#!/usr/bin/env node

var arr=Array()

for (i=0; i < 20; i++) {
  arr.push(Math.floor(Math.random() * 1000))
}


function qs(arr){
  if(arr.length === 0) { return arr; }

  var pivot = arr[0];
  var left = [];
  var right = [];

  for(var i = 1; i < arr.length ; i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    }
    else {
      right.push(arr[i]);
    }
  }
  return qs(left).concat(pivot,qs(right));
}

console.log(arr);
console.log(qs(arr));
