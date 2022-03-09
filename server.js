const express = require('express');
const nunjucks = require('nunjucks');


const app = express();

app.use(express.static('public'));

app.set('view engine', 'html')

nunjucks.configure('views', {
    express: app
})

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/about', function(req, res) {
    res.render('about')
})

app.get('/recipes', function(req, res) {
    res.render('recipes')
})

app.listen(5000, function () {
    console.log('Server started!')
});