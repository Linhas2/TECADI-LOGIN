Script
import { logado } from views / logado.jsx;
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const port = 3000;
var path = require('path');
const app = express();
const alert = require('alert-node');

var login = "001169";
var password = "123456"

app.use(session({ secret: 'dfghj' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));


app.post('/', (req, res) => {
    if (req.body.password == password && req.body.login == login) {
        req.session.login = login;
        res.render('logado');
    } else {
        res.render('index');
        alert("Seu login ou senha estao incorretos");
    }
})


app.get('/', (req, res) => {
    if (req.session.login) {
        res.render('logado');
    } else {
        res.render('index');
    }
})

app.listen(port, () => {
    console.log('servidor rodando');
})
