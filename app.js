var express=require('express');

var sampctrl=require('./controllers/sample');

var app=express();

app.set ('view engine','ejs');

app.use('assets',express.static('assets'));

//fire the controller
sampctrl(app);

app.listen(8083);

console.log("Hello! express.......");
