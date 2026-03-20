const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const message = 'Hello world';
    console.log(message);
    res.send(message);
});

module.exports = app;
