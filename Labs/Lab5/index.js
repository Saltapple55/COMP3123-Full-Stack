//use routes to get things-
var express = require('express')
var app = express()
//http:/localhost/process_get

app.use(express.static('public'))

app.get('/index.html', function (req,res){

})
app.get('/process_get', function (req,res){

    //gets a json
    response={
        first_name: req.query.fn,
        last_name: req.query.ln

    };
    
})

app.listen(8081, function(){
    console.log("server running")
})

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded()

