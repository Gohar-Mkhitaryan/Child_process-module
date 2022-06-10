const { exec } = require('child_process');


// exec('ls -lh', (error, stdout, stderr)=>{
//     if(error){
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if(stderr){
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });


// exec('pwd', (error, stdout, stderr)=>{
//     if(error){
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if(stderr){
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });

// exec('node -v', (error, stdout, stderr)=>{
//     if(error){
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if(stderr){
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });


// exec('cat *.js missing_file | wc -l', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
//   });

//const { exec } = require('child_process');

// exec('find . -type f | wc -l', (err, stdout, stderr) => {
//   if (err) {
//     console.error(`exec error: ${err}`);
//     return;
//   }

//   console.log(`Number of files ${stdout}`);
// });


// exec ('dir | find /c/v ""', (error, stdout, stderr)=>{
//   if(error){
//     console.error(`exec error: ${error}`);
//     return;
//   }
//   console.log(`stdout: directories = ${stdout}`);
//   if(stderr!="")
//   console.error(`stderr:${stderr}`);
// });

const { execFile } = require('child_process');
  
//const child = execFile('node', ['less2.js'], 
//         (error, stdout, stderr) => {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });

// const util = require('util');
// const execFile = util.promisify(require('child_process').execFile);
// async function getVersion() {
//   const { stdout } = await execFile('node', ['--version']);
//   console.log(stdout);
// }
// getVersion();


//child_process.fork()

// const cp = require('child_process');
  
// const child = cp.fork(__dirname + '/less2.js');
  
// child.on('message', function(m) {
//   console.log('Parent process received:', m);
// });
  
// child.send({ hello: 'from parent process' });
  
// child.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

const { spawn } = require('child_process');
// const child = spawn('dir', ['C:\Test'], {shell: true});
// child.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });
  
// child.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });
  
// child.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });


// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });


// const ps = spawn('ps', ['ax']);
// const grep = spawn('grep', ['ssh']);

// ps.stdout.on('data', (data) => {
//   grep.stdin.write(data);
// });

// ps.stderr.on('data', (data) => {
//   console.error(`ps stderr: ${data}`);
// });

// ps.on('close', (code) => {
//   if (code !== 0) {
//     console.log(`ps process exited with code ${code}`);
//   }
//   grep.stdin.end();
// });

// grep.stdout.on('data', (data) => {
//   console.log(data.toString());
// });

// grep.stderr.on('data', (data) => {
//   console.error(`grep stderr: ${data}`);
// });

// grep.on('close', (code) => {
//   if (code !== 0) {
//     console.log(`grep process exited with code ${code}`);
//   }
// });

const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process close all stdio with code ${code}`);
});

ls.on('exit', (code) => {
  console.log(`child process exited with code ${code}`);
});