const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const birds = require('./birds');
const users = require('./users');

app.use('/public', express.static('static'));

app.use(express.json());

app.get('/', (req, res, next) => {
    console.log('Hello World')
    next();
})

app.get('/', (req, res) => {
    res.send('YOOOOOO')
})

app.use('/users', users);
app.get('/random.text', (req, res) => {
    res.send("Random Text!")
})


app.get('/flights/:from-:to', (req, res) => {
    res.send(req.params)
})

app.get('/example/a', (req, res) => {
    res.send("Hello from A!")
})

app.get('/example/b', (req, res, next) => {
    console.log("Response will be send by next method");
    next();
}, (req, res) => {
    res.send("Hello from B!")
})

const cb0 = (req,res,next) =>{
    console.log("CB0");
    next();
}

const cb1 = (req, res) =>{
    res.send("Hello from C!")
}
app.get('/example/c', [cb0, cb1])

app.use('/birds', birds)

app.listen(port, () => {
    console.log(`Server listening in port ${port}`);
});