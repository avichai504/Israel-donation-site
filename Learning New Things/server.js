const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  console.log("requests made");

  // lodash
  
  // set headers for the document
  res.setHeader("Content-Type", "text/html");

  // routing
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
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    case "/about-my":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // sent an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end(); //! we need to end the connection
    } else {
      res.write(data); //! this is how we write html to the document
      res.end();
    }
  });
});

server.listen(3001, "localhost", () => {
  console.log("Listening for request on port 3001");
});
