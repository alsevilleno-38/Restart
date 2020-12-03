const express = require("express");
const path = require("path");
const port = 3030;

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.get("/home", function (req, res, next) {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/success", function (req, res, next) {    
    res.sendFile(path.join(__dirname, "success.html"));
});
app.post("/home", function (req, res, next) {
    console.log("[Home] POST");    
    res.redirect("/success");
})
app.get("/index", function (req, res, next) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/", function (req, res, next) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.use("/", function (req, res, next) {
    res.sendFile(path.join(__dirname, "error.html"));
});

app.listen(port);
console.log("Connection Successful!");
console.log(`Listening to port ${port}...`);