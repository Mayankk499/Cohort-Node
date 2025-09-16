const http = require("node:http");
const fs = require('node:fs');

const server = http.createServer(function (req, res) {
  const method = req.method;
  const path = req.url;

  const log = `\n[${Date.now()}]: ${method} ${path}`;
  fs.appendFileSync('log.txt', log, 'utf-8');

  switch (method) {
    case "GET":
      {
        switch (path) {
          case "/":
            return res.writeHead(200).end(`Hello :) 👍`);

          case "/contact-us":
            return res
              .writeHead(200)
              .end(`Connect with me on mk@mk.com and +91-xxx-xxx-xxxx`);
          case "/tweet":
            return res
              .writeHead(200)
              .end(`Tweet-1\nTweet-2`);
        }
      }
      break;
    case "POST": {
      switch (path) {
        case "/tweet":
          return res.writeHead(201).end(`Your tweet was created`);
      }
    }
  }

  return res.writeHead(404).end("you are lost");
  res.end("OKK!");
});

server.listen(8000, () => console.log(`Server is listening on port 8000`));
