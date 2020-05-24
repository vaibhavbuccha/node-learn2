var express = require("express");
var app = express();

app.get('/whatsapp', function(req,res){
    console.log(req.body);
    res.send('Hello from Whatsapp');
});

app.get('/', function(req, res){
    res.send('hello world');
});
app.listen(process.env.PORT || 8080);