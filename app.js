'use strict';

const express = require('express');
const app = express();
const port = 3000;

app.use('/', (req, res)=>{
    res.status(200).send('App work!');
})
app.listen(port);
//dasdsa
