// Express Setup
const express = require('express')
const app = express()
// View Engine Setup 
app.set('view engine', 'ejs');
// Port 
app.listen(3000)

// Home Page
app.get('/', function (req, res) {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render("index", { title: "Home", blogs })
})
// About Page 
app.get('/about', function (req, res) {
    res.render("about")
})
// Create-blog Page 
app.get('/blogs/create', function (req, res) {
    res.render("create")
})
// 404 Page
app.use((req, res) => {
    res.status(404).render("404");
});




/*

    View Engine

        + View Engine helps to do dynamic data of html
        
        + View Engines: Express Handlebars, Pug, EJS
    
    EJS View Engine 
    
        + Step 1: npm i ejs 
        
        + Step 2: register view engine --> app.set('view engine', 'ejs');
        
        + Step 3: html folder --> by default, it will look at folder named views 
        
        + Step 4: create .ejs file instead of .html file

        + Step 5: send back .ejs file using express --> render()

    Create Dynamic Content 

        + Using ejs tag

        + Define variable: <% const name = "David" %>

        + Export variable to html: <%= name %>

        + Pass data from server to .ejs file: res.render("index", { title: "Home" })

    Partials

        + Partials help to create templated which is reusable 

        + Syntax: <%- include(./partials/nav.ejs)  %> 
        
            --> export html tags

*/