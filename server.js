const express = require('express');
const nunjucks = require('nunjucks');


const app = express();
const data = require('./data');

app.use(express.static('public'));

app.set('view engine', 'njk')

nunjucks.configure('views', {
    express: app,
    autoescape: false,
    noCache: true
})

app.get('/', function(req, res) {
    res.render('home', {items: data})
})

app.get('/about', function(req, res) {
    res.render('about')
})

app.get('/recipes', function(req, res) {
    res.render('recipes', {items: data});
})

app.get('/recipe/:id', function(req, res) {
    const id = req.params.id
    const recipe = data[id]
    res.render('recipev2', {recipe})
})

app.listen(process.env.PORT || 5000, function () {
    console.log('Server started!')
});