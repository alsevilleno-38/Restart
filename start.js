const express = require("express");
const fs = require("fs");
const path = require("path");
const port = 3030;
const bodyParser = require("body-parser");
const convert = require('xml-js');

const app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.get("/home", function (req, res, next) {
    res.sendFile(path.join(__dirname, "pages/home.html"));
});
app.get("/process", function (req, res, next) {    
    // let input = req.query.input;    
    // let result = "Invalid";
    // if ((input = parseFloat(input)) != NaN) {
    //     result = input;
    // }    
    // res.send({result});
    // const data = { h3: "default", h2: 200, h1: "developer" };
    // // res.send(JSON.stringify(data));
    // let options = {compact: true, ignoreComment: true, spaces: 4};
    // let result = convert.js2xml(data, options);    
    // console.log(result);
    // res.send(result);

    const data = { info: { name: "default", age: 200, desc: "developer" } };
    // res.send(JSON.stringify(data));
    let options = {compact: true, ignoreComment: true, spaces: 4};
    let result = convert.js2xml(data, options);    
    console.log(result);
    res.set("Content-Type", "text/json");
    res.send(JSON.stringify(data, null, 4));
});
app.post("/process", function (req, res, next) {    
    // const data = { name: "default", age: 200, desc: "developer" };
    // res.send(JSON.stringify(data));

    const data = { info: { name: "default", age: 200, desc: "developer" } };
    // res.send(JSON.stringify(data));
    let options = {compact: true, ignoreComment: true, spaces: 4};
    let result = convert.js2xml(data, options);    
    console.log(result);
    res.set("Content-Type", "text/xml");
    res.send(result);
});
app.get("/success", function (req, res, next) {    
    res.sendFile(path.join(__dirname, "pages/success.html"));
});
app.get("/prepare", function (req, res, next) {    
    res.sendFile(path.join(__dirname, "pages/prepare.html"));
});
app.post("/prepare", function (req, res, next) {    
    res.sendFile(path.join(__dirname, "pages/success.html"));
});
app.post("retrieve", function (req, res, next) {    
    
});
app.get("/photo", function (req, res, next) {    
    res.sendFile(path.join(__dirname, "pages/photo.html"));
});
app.post("/store", function (req, res, next) {    
    console.log(req.body.info);
    const storedData = JSON.stringify(req.body.info, null, 4);
    fs.writeFile(path.join(__dirname, "data/purrfect.json"),     
        storedData,
        function (err) {
            res.send("success");
            console.log(err);
        })    
})
app.get("/store", function (req, res, next) {
    fs.readFile(path.join(__dirname, "data/purrfect.json"), function (err, data) {
        res.send(data);
    })
})

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