const os = require("os");
console.log(os.arch());//return 64bit architecture.
console.log(os.type());//return os type.
console.log(os.tmpdir());//Return the path of temp variable
 const x=os.totalmem();
console.log(`${x}` /1024 /1024 /1024);//return total memory 
const y=os.freemem();
console.log(`${y}` /1024 /1024/1024);//return free Memory
console.log(os.userInfo());
console.log(os.version());
console.log(os.uptime());
