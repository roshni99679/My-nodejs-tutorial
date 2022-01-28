//npm packages

//What is npm 
//npm is node package manager 

//  steps to initialize npm 
//vscode terminal> go to root directory using cd (here npm_in_nodejs is the root directory) and type "npm init"
//you will get a package.json file inside this directory 
//in package.json file you will see all the dependencies that you will use

//node modules stores the code of our dependencies
//package-lock.json will have more data about the dependencies
//package.json displays all the dependencies installed 

//ex: here we installed chalk module 
//vscode terminal>npm_in_nodejs>npm install chalk
//How to use chalk now??

// import styles from 'ansi-styles';
// const chalk=require("chalk");
// console.log(`${styles.green.open}Hello from Rosh ${styles.green.close}`);

// console.log(chalk.blue("Hello from Rosh"));
// console.log(chalk.blue.underline("Hello from Rosh"));
// console.log(chalk.blue.underline.inverse("Hello from Rosh"));
// console.log(chalk.green.underline.inverse("success"));
// console.log(chalk.red.underline.inverse("failed"));

//validator
// const { default: chalk } = require("chalk");
const validator=require("validator");

const res=validator.isEmail("roshni@gmail.com")
console.log(res)
//op:true
// console.log(res? chalk.green.inverse(res): chalk.red.inverse(res));

