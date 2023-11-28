const express = require('express');
const app = express();
const port = 3090;
const mensagem = "SERVIDOR ON, NA PORTA: "

app.use(express.static('./publico/'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("home");
})
app.get('/videos', function(req,res)
{
    res.render("videos");
})
app.get('/agenda', function(req, res){
    res.render("agenda");
})

app.listen(port, function(req, res)
{
    console.log(mensagem + port);
});