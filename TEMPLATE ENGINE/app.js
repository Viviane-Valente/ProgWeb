const { Router } = require('express');
const { application } = require('express');
const express = require('express');
const app = express();

// diretório padrão de views na raiz da aplicação
app.set('views','./views');
//template engine a ser utilizado pelo Express
app.set('view engine','pug');

//define um middleware para fornecimento de arquivos estáticos
app.use(express.static('public'));

app.get('/',(req,res) => {
    res.render('index');
});

app.get('/',(req,res) => {
    res.render('introducao');
});

app.listen(3000, () => {
    console.log('Servidor rodando');
});

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

var introducaoRouter = require('./routes/introducao');
app.use('/', introducaoRouter);