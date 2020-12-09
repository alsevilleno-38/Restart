const express = require("express");
const path = require("path");
const port = 3030;
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.get("/home", function (req, res, next) {
    res.sendFile(path.join(__dirname, "pages/home.html"));
});
app.get("/process", function (req, res, next) {    
    let input = req.query.input;    
    let result = "Invalid";
    if ((input = parseFloat(input)) != NaN) {
        result = input;
    }    
    res.send({result});
});
app.post("/process", function (req, res, next) {    
    
});
app.get("/success", function (req, res, next) {    
    res.sendFile(path.join(__dirname, "pages/success.html"));
});
app.get("/photo", function (req, res, next) {    
    res.sendFile(path.join(__dirname, "pages/photo.html"));
});
app.get("/widget", function (req, res, next) {    
    res.sendFile(path.join(__dirname, "pages/widget.html"));
});
app.post("/home", function (req, res, next) {
    console.log("[Home] POST");    
    res.redirect("pages/success");
})
app.get("/index", function (req, res, next) {
    res.sendFile(path.join(__dirname, "pages/index.html"));
});
app.get("/", function (req, res, next) {
    res.sendFile(path.join(__dirname, "pages/index.html"));
});
app.use("/", function (req, res, next) {
    res.sendFile(path.join(__dirname, "pages/error.html"));
});

app.listen(port);
console.log("Connection Successful!");
console.log(`Listening to port ${port}...`);