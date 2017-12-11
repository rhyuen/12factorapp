const http = require("http");
const serverName = process.env.SERVER_NAME || "default";
const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(`Hello world from server ${serverName}\n`);
});

server.listen(PORT, () => {
    console.log(`Server on PORT ${PORT}`);
});

//docker run -d -e "SERVER_NAME=chicken --name=chicken app-nodejs"
