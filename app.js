const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const message = 'Hello world';
    res.send(message);
});

module.exports = app;
