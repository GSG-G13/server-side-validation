const express = require('express');
const { join } = require('path');

const router = require('./router');

const app = express();
app.set('port', 8080);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, '..', 'public')));

app.use('/api/v1', router);


module.exports = app;