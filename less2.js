//console.log('It\'s fine day');



process.on('message', function(m) {
    console.log('Child process received:', m);
  });
    
  process.send({ hello: 'from child process' });