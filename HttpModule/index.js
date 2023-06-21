const http = require("http")

const Server = http.createServer ( (req,res) => {
    if(req.url == '/') {
        res.write('<h1>Hello , Node.js Server <h1>');
    }
    res.end() ;
})


Server.listen(5000);

console.log("The http server is running port no. 5000");


//================//h   

