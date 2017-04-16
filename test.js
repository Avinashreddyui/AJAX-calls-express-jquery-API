/**
 * Created by Avinash Theppala on 4/14/2017.
 */

var express = require('express');
var app =express();
var fs = require('fs');
var path =require("path");
var data = require("./users.json");
var bodyParser = require('body-parser');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.render('login.html');
});
app.use(bodyParser());
app.use('/scripts', express.static(__dirname + '/scripts'));
app.get('/api',function (req,res) {
    res.json(data);
});
app.post('/api/addUsers', function(req, res) {
    var obj = {};
    res.send(req.body);
    fs.readFile('./users.json', 'utf-8', function (err, data) {
        if (err) throw errr
        var arrayOfObjects = JSON.parse(data);
        arrayOfObjects.users.push({
            name: req.body.name,
            age: req.body.age
        });
        console.log(arrayOfObjects);
        fs.writeFile('./users.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!')
        });
    });
});

app.listen(8080,function () {
   console.log('express');
});
