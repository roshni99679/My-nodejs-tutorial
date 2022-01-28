const os=require("os"); 

//-----------------------------------------------------------------------------------------------
console.log(os.arch());
//op:x64

//------------------------------------------------------------------------------------------------
const free_memory=os.freemem();
console.log("Free memory space in our ram is:")
console.log(`in bytes: ${free_memory}`);
console.log(`in kilobytes: ${free_memory/1024}`);
console.log(`in megabytes: ${free_memory/1024/1024}`);
console.log(`in gigabytes: ${free_memory/1024/1024/1024}`);
//op:Free memory space in our ram is:
//in bytes: 1035231232
//in kilobytes: 1010968
//in megabytes: 987.2734375
//in gigabytes: 0.9641342163085938

//---------------------------------------------------------------------------------------------------
const tot_mem=os.totalmem();
console.log(`total memory in bytes: ${tot_mem}`)
//op:total memory in bytes: 4154499072

//---------------------------------------------------------------------------------------------------
console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir())
console.log(os.type())
//op:
// x64
// DESKTOP-2JA5UIF
// win32
// C:\Users\KHUSHB~1\AppData\Local\Temp
// Windows_NT
