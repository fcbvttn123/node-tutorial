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