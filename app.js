const express = require('express')
const app = express()
app.listen(3000)

/*

    Send text/tag

*/
app.get('/text', function (req, res) {
  res.send('Hello World')
})




/*

    Send file

*/
app.get('/', function (req, res) {
    // By default, the path is absolute path 
    // We need to make it a relative path with the second parameter
    // __dirname will return the current path of the current file 
    res.sendFile("./views/index.html", {root: __dirname})
})
app.get('/about', function (req, res) {
    res.sendFile("./views/about.html", {root: __dirname})
})




/*

    Redirect

*/
app.get('/about-us', function (req, res) {
    res.redirect("/about")
})




/*

    404 Page 

    it does not automatically set the status code for us 

    Must be at the bottom of the file !!!

*/
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});