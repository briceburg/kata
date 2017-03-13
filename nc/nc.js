#!/usr/bin/env node

// nc.js [-l|--listen] <[host:]port>
//   if listen, starts a server that echos received inputs back to a client
//   if !listen, sends stdin to host:port

// ex. nc -l 127.0.0.1:7777
//     cat sample | nc 7777

var net = require('net');

var port=0;
var host="localhost"
var listen=false;

for (let arg of process.argv.slice(2)){
  if (arg == '-l' || arg == '--listen') {
    listen=true;
  }
  else {
    var tuple=arg.split(':',2);
    if(tuple.length > 1){
      host=tuple[0];
      port=parseInt(tuple[1]);
    }
    else {
      port=parseInt(tuple[0]);
    }
  }
}

console.error(`starting nc with host: ${host} port: ${port}`)
listen ? console.error('listen mode on') : console.error('listen mode off');

if(listen){
  var server = net.createServer();
  server.listen(port,host,function(s){
    console.error(`bound to ${host}:${port}`);
  });

  server.on('connection', function(socket){
    console.error('client connected');
    socket.write('aaaagggg');
    socket.setEncoding('utf-8');
    socket.on('readable', function(){
      //var line = socket.read().trim();
      // trim strips newline, alt use; .replace("\n","")
      var line = socket.read();
      if(line !== null){
        socket.write(`${line.replace("\n","")} echo!\n`)
      }
    })
  });
}
else {
  console.log('connecting...')

  var socket = new net.Socket();

  socket.connect(port, host, function(){
    console.error(`connected to ${host}:${port}`);

    socket.setEncoding('utf-8');
    socket.on('readable', function(){
      var line = socket.read();
      if(line !== null){
        console.log(line);
      }
    });

    // buffer stdin
    process.stdin.setEncoding('utf-8');
    process.stdin.on('readable', function(){
      var line = process.stdin.read();
      if(line !== null) {
        socket.write(line);
      }
    });



  });

}
