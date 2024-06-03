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

const fs = require("fs")

fs.readFile("./blog.txt", (error, data) => {
    error && console.log(error)
    console.log(data.toString())
})

fs.writeFile("./blog.txt", "Hello David", () => {
    console.log("Fire was written")
})

!fs.existsSync("./assets") && fs.mkdir("./assets", (error) => {
    error && console.log(error)
    console.log("Folder Created")
})

fs.existsSync("./assets") && fs.rmdir("./assets", (error) => {
    error && console.log(error)
    console.log("Folder Deleted")
})

fs.existsSync("./blog2.txt") && fs.unlink("./blog2.txt", error => {
    error && console.log(error)
    console.log("File Deleted")
})




/*

    Streams and Buffers (Check streams.js) --> used for huge files

        + How it works ? 

            --> data is loaded into small buffers

*/

const fs = require("fs")
// The second parameter is optional 
const readStream = fs.createReadStream("./blog2.txt", { encoding: "utf8" })
// Write Stream
const writeStream = fs.createWriteStream("./blog3.txt")
// First Way: Execute chunked data
readStream.on("data", chunk => {
    console.log("----- NEW CHUNK -----")
    console.log(chunk)

    writeStream.write("----- NEW CHUNK -----")
    writeStream.write(chunk)
})
// Second Way: Write Stream using Pipe 
readStream.pipe(writeStream)