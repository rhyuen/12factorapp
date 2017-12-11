const path = require("path");
const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();


app.use(fileUpload());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "public/index.html"));
});
app.post("/upload", (req, res) => {
    if(!req.files){
        return res.status(400).send("No files were uploaded");
    }

    const {uploadindex} = req.files;
    const uploadTo = `uploads/${uploadindex.name}`;
    uploadindex.mv(uploadTo, (err) => {
        if(err){
            return res.status(500).send(err);
        }

        res.send(`File uploaded to <a href="${uploadTo}">${uploadTo}</a>`);
    });
});

app.listen(8080, () => {
    console.log("8080");
});