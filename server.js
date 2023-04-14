const express = require('express');

const app = express()
const PORT = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.get('/home', (req, res) => {
res.send('<h1> Home Page </h1>')
})

app.get('/new', (req, res) => {
res.render('New')
})

app.listen(3000, () => {
    console.log(`Server is running: ${PORT}`);
})