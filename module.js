// const color = require('cli-color')

// console.log(color.green("yashraj s m k"))

// local module

// const auth = require('./auth')

// auth.register('Aditya s m k')
// auth.login("yash","no on knows")

// Core Modules

const path = require("path");

// console.log("Folder name : ",path.dirname(__filename))

// Filename

// console.log("File name : ",path.basename(__filename))

// Extension

// console.log("Ext name : ",path.extname(__filename))

// Parse

// console.log("Parse : ",path.parse(__filename))

// Join

// console.log("Join : ",path.join(__dirname, 'order','app.js'))

// File System

// const fs = require("fs");
// Make a directory

// fs.mkdir(path.join(__dirname,'/test'),(err) =>{
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log('folder created')
// }
// )

// Create a File

// fs.writeFile(path.join(__dirname,'test','test.txt'),'first text file',(err) => {
//     if(err)
//     {
//         throw err
//     }
//     fs.appendFile(path.join(__dirname,'test','test.txt'),'\n new data is added',(err) => {
//         if(err)
//         {
//             throw err
//         }
//         console.log('data added')
//     })
//     console.log("File created")
// })

// Read a file

// fs.readFile(path.join(__dirname, "test", "test.txt"),'utf-8', (err, data) => {
//   if (err) {
//     throw err;
//   }
// //   const content = Buffer.from(data);
// //   console.log(content.toString());

//     console.log(data);
// });

// OS Module
//  const os = require('os')

// console.log('OS Type',os.platform())

// console.log('CPU architecture',os.arch())

// console.log('cpu details',os.cpus())

// console.log('free memory',os.freemem())

// console.log('uptime',os.uptime())

// Events module

const Emitter = require("events");

// const myemitter = new Emitter();

// myemitter.on("yashraj", (data) => {
//   console.log(data)
// })

// myemitter.emit("yashraj", {
//   name: "aditya"
// });

// class Auth extends Emitter{
//     register(username){
//         console.log('Register successfully')
//         this.emit('registered',username)
//     }
// }

// const auth = new Auth()
// Listen

// auth.on('registered',(username)=>{
//     console.log(`sending email to ${username}`)
// })
 
// auth.register('Codes')
