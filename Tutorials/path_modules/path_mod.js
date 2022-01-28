const path=require("path");

console.log(path.dirname('C:/Users/khushbu gupta/Desktop/WebDev Workspace/node_tutorial/Tutorials/path_modules/path_mod.js'));
//op:C:/Users/khushbu gupta/Desktop/WebDev Workspace/node_tutorial/Tutorials/path_modules

console.log(path.extname('C:/Users/khushbu gupta/Desktop/WebDev Workspace/node_tutorial/Tutorials/path_modules/path_mod.js'));
//op: .js

console.log(path.basename('C:/Users/khushbu gupta/Desktop/WebDev Workspace/node_tutorial/Tutorials/path_modules/path_mod.js'));
//op:path_mod.js

console.log(path.parse('C:/Users/khushbu gupta/Desktop/WebDev Workspace/node_tutorial/Tutorials/path_modules/path_mod.js'));
//op:
// {
//     root: 'C:/',
//     dir: 'C:/Users/khushbu gupta/Desktop/WebDev Workspace/node_tutorial/Tutorials/path_modules',
//     base: 'path_mod.js',
//     ext: '.js',
//     name: 'path_mod'
// }


const mypath=path.parse('C:/Users/khushbu gupta/Desktop/WebDev Workspace/node_tutorial/Tutorials/path_modules/path_mod.js')
console.log(mypath.dir)
//op:C:/Users/khushbu gupta/Desktop/WebDev Workspace/node_tutorial/Tutorials/path_modules

const mpath=path.parse('C:/Users/khushbu gupta/Desktop/WebDev Workspace/node_tutorial/Tutorials/path_modules/path_mod.js')
console.log(mpath.name)
//op:path_mod