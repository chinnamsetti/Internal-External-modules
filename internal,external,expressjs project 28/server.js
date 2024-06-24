const os=require("node:os");
const path=require("node:path");
const moment=require("moment");

console.log(os.platform());
console.log(os.totalmem()/1024/1024/1024);
console.log(os.freemem()/1024/1024);
console.log(os.release());
console.log(os.version());
console.log(os.tmpdir());
console.log(os.homedir());

console.log(path.parse("https://nodejs.org/docs/latest/api/os.html#osplatform"));

console.log(moment().format("MMM Do YY"));
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

