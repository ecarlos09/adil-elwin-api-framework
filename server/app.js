const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to our sports website!')
});

app.listen(port, () => {
    console.log(`Our sports website can be found in ${port}`);
});