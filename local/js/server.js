var express = require("express");
var app = express();


app.use(express.static("../remote"));
app.listen(80);

console.log("serverUp");