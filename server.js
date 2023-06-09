require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectToDB = require('./config/db');
const Logs = require('./models/Logs');

const app = express()
const PORT = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
res.send('<h1> Home Page </h1>')
})

app.get('/new', (req, res) => {
res.render('New')
})

app.post    ('/logs', (req, res) => {
// res.send('received')
    console.log(req.body)
    // if (req.body.shipIsBroken === 'on') {
    //     req.body.shipIsBroken = true;
    // } else {
    //     req.body.shipIsBroken = false;
    // }
})

app.listen(3000, () => {
    console.log(`Server is running: ${PORT}`);
    connectToDB();
})