const http = require("node:http");

const server = http.createServer(function (req, res) {
  console.log(`incoming request [${Date.now()}]`);
  console.log(req.headers);

  switch (req.url) {
    case "/":
      res.writeHead(200);
      return res.end(`Homepage`);

    case "/about":
      res.writeHead(200);
      return res.end(`i'm a backend Developr`);

    case "/contact-us":
      res.writeHead(200);
      return res.end(`Connect with me on mk@mk.com`);

    case "/add":
      res.writeHead(200);
      return res.end(`Noida, UP - [IN]`);
  }

  res.writeHead(201);
  res.end("OKK!");
});

server.listen(8000, () => console.log(`Server is listening on port 8000`));
