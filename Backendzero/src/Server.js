require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./Config/ViewEngine')

// import express from 'express'
const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);



//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World!11');
})

app.get('/abc', (req, res) => {
    res.render('Exp.ejs');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})