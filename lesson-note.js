const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req.url);

  /* 

    set header content type: text/html, text/plain

  */
  // res.setHeader('Content-Type', 'text/html');

  // res.write('<p>hello, ninjas</p>');
  // res.write('<p>hello again, ninjas</p>');
  
  // res.end();

  
  
  
  /* 

    send html file

  */
  // const readStream = fs.createReadStream("./views/index.html", { encoding: "utf8" })
  // readStream.on("data", chunk => {
  //   res.write(chunk) --> if you only write one thing, you can pass it into the end() function
  //   res.end(chunk)
  // })



  /* 

    Status Code

    + syntax: res.statusCode

    + youtube tutorial: https://www.youtube.com/watch?v=DQD00NAUPNk&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=4&t=779s

    Redirect: 

    + syntax: res.setHeader(name, value)

    + example: res.setHeader("Location", "/about") --> The Location header indicates the URL to which the client should be redirected

  */
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
  }

});




/* 

  localhost is the default value for 2nd argument

*/
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});