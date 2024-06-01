/* 

    Global Object: 
    
    + In browser, the global object is "window"
    
    + In node, the global object is "global"

    We cannot use "document" object in Node 

    + Example: console.log(document.querySelector) --> error 

*/

console.log(global)

global.setTimeout(() => {
    console.log("hi")
}, 3000);

setTimeout(() => {
    console.log("hi")
}, 4000);

console.log(__dirname)
console.log(__filename)




/* 

    Modules (check people.js and modules.js): 
    
    + Syntax to import 

        const obj = require("./relative-path/anotherFile")
    
        --> this code will run the code in anotherFile.js

        --> require() returned an object 

        --> But the obj variable will be an empty object. Why ? 

        --> Because we didn't export anything from anotherFile.js

    + Syntax to export 

        module.exports = "hello"

        const obj = require("./relative-path/anotherFile")

        console.log(obj) --> hello

*/




/*

    OS file 

        + Syntax: const os = require("os")

        + Useful Functions: os.platform(), os.homedir()

*/

const os = require("os")
console.log(os.platform(), os.homedir())




/*

    Fire System (Check file.js) --> used for small files

        + Read File: readFile(pathString, callbackFunc) 
            
            --> Asynchronous 

        + Write File: writeFile(pathString, newString, callbackFunc) 

            --> If the path does not exist, it will create a new file

        + Check if directory exists: fs.existsSync("path")

        + Create Folder: fs.mkdir("path", callbackFunc)

        + Remove Folder: fs.rmdir("path", callbackFunc)

        + Remove File: fs.unlink("path", callbackFunc)

*/