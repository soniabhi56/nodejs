var express=require('express');
var app=express();
app.set('view engine','pug');
app.route('/Node').get(function(req,res)
{
    res.send("Tutorial on Node");
});
app.route('/Angular').get(function(req,res)
{
    res.send("Tutorial on Angular");
});
// app.route('/Angular').get(function(req,res)
// {
//     res.send('Welcome to Guru99 Tutorials');
// });

app.get('/Hello',function(req,res)
{
//res.send({'name':'Hello World!'});
res.render('index',{title:'Guru99',message:'Welcome'})
});
var server=app.listen(3000,function() {});
