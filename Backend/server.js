const express = require('express');
const user = require('./routes/api/users')
const app = express();
require('dotenv').config();

app.get('/', (req, res) => res.send('Hello world!'));
app.use(express.json(
    {extended:true}
));
app.use(express.urlencoded(
    {extended:true}
));

app.use('/api/users', user)

module.exports = app;