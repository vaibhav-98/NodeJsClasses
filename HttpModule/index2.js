const http = require("http");

const PORT = 3004;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
  //Home Page
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Welcom to Node Server created by Vaibhav tripathi");
  }
  //About Page
  else if (req.url == "/about") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("About-Page");
  }
  //Contact Page
  else if (req.url == "/Contact") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Contact-page");
  }
  //Product Page
  else if (req.url == "/Product") {
    const options = {
      hostname: "fakestoreapi.com",
      path: "/products/1",
      method: "GET",
    };

    const ApiReq = http.request(options, (apiRes) => {
      apiRes.on("data", (data) => {
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        res.end(data.toString());
      });
    });

    ApiReq.on("error", () => {
      console.log(error);
    });

    ApiReq.end();
  }
  //Rest......>Error
  else {
    res.statusCode = 500;
    res.setHeader("Content-type", "text/plain");
    res.end("server -Error");
  }
});

server.listen(PORT, () => {
  console.log("Server running at ${HOSTNAME} :${POST}");
});
