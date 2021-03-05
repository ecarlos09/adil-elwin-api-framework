const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const studentRoutes = require('../server/controllers/students');
app.use('/students', studentRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to our Hamilton Cohort website!')
});

app.post('/', (req, res) => {
    res.status(405).send('Not allowed to do that!');
});

module.exports = app;