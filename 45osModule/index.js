const os = require('os');
console.log(os.arch())//Returns the operating system CPU architecture for which the Node.js binary was compiled.

console.log(os.freemem()/(1024*1024*1024)) // returns free memeory on sys
console.log(os.totalmem()/(1024*1024*1024))
console.log(os.hostname())// system name
console.log(os.platform()) // os -platform -> window
console.log(os.userInfo())// returns info about currently effective user



















