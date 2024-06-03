const http = require('http');
const fs = require('fs');




const server = http.createServer((req, res) => {
  console.log(req);
  console.log(req.url);

  /* 

    set header content type: text/html, text/plain

  */
  res.setHeader('Content-Type', 'text/html');

  res.write('<p>hello, ninjas</p>');
  res.write('<p>hello again, ninjas</p>');
  
  res.end();

  /* 

    send html file

  */
  const readStream = fs.createReadStream("./views/index.html", { encoding: "utf8" })
  readStream.on("data", chunk => {
    // res.write(chunk) --> if you only write one thing, you can pass it into the end() function
    res.end(chunk)
  })

});




/* 

  localhost is the default value for 2nd argument

*/
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});