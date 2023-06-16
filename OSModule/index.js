

const os = require ("os")

console.log("CPU ARchitecture" + os.arch());

console.log("Free memory " + os.freemem());

console.log("Free memory " + os.totalmem());

console.log("Network Interface" + JSON.stringify(os.networkInterfaces()));

console.log("OS default temp dir " + os.tmpdir ());

