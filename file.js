const fs = require("fs")

// Read File

fs.readFile("./blog.txt", (error, data) => {
    error && console.log(error)
    console.log(data.toString())
})

// Write File 

fs.writeFile("./blog.txt", "Hello David", () => {
    console.log("Fire was written")
})

// Create Folder 

!fs.existsSync("./assets") && fs.mkdir("./assets", (error) => {
    error && console.log(error)
    console.log("Folder Created")
})

// Remove Folder 

fs.existsSync("./assets") && fs.rmdir("./assets", (error) => {
    error && console.log(error)
    console.log("Folder Deleted")
})

// Remove File 

fs.existsSync("./blog2.txt") && fs.unlink("./blog2.txt", error => {
    error && console.log(error)
    console.log("File Deleted")
})