const express = require ("express");

const app = express () ;

const PORT = 3004;
const HOSTNAME = 'localhost'


app.get('/' , (req,res) => {
    res.send('Hello World')
});


app.get('/about' , (req,res) => {
    res.send('about')
});

app.get('/contact' , (req,res) => {
    res.send('Hcontact -page')
});


app.listen(PORT , () => {
    console.log(`Server running at ${HOSTNAME} : ${PORT}`);
});








