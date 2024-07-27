const express = require('express');
const path = require('path');
require('dotenv').config();
// import express from 'express'
const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

// config template engine
app.set('views', path.join(__dirname, './views/'));
app.set('view engine', 'ejs');

//config static file
app.use(express.static(path.join(__dirname, 'public')))

//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World!1124324135345344444444444444444444444444411');
})

app.get('/abc', (req, res) => {
    res.render('Exp.ejs');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})