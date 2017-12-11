const path = require("path");
const express = require("express");
const proxy = require("express-http-proxy");
const baseImageUrl = process.env.BASE_IMAGE_URL
    ? proxy(baseImageUrl, {
        proxyReqPathResolver: (req) => {
            const newPath = baseImageUrl + req.path;
            console.log(newPath);
            return newPath;
        }
    })
    : express.static(path.join(__dirname, "public/images"))
const app = express();
app.use("/images", baseImageUrl);

app.listen(8080);