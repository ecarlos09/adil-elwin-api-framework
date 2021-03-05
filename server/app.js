const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to our Hamilton Cohort website!')
});

module.exports = app;