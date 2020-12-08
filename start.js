const express = require("express");
const path = require("path");
const port = 3030;

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.get("/home", function (req, res, next) {
    res.sendFile(path.join(__dirname, "pages/home.html"));
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