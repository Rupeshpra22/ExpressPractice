const express = require('express');
const router = express.Router();

const users = {
    rohit: {
        firstName: "Rohit",
        lastName: "Kumar"
    },
    sagar: {
        firstName: "Sagar",
        lastName: "Jain"
    }
}

const myLogger = (req,res,next) =>{
    console.log("LOGGED");
    console.log(req.url);
    next();
}

router.use(myLogger);

router.get('/', (req, res) => {
    res.send("All users!")
})

router.get('/:userid', (req, res) => {
    const userData = users[req.params.userid];
    if (userData) {
        res.send(users[req.params.userid]);
    } else {
        res.send("User does not exist")
    }
})

router.post('/', (req, res) => {
    const userData = req.body;
    const id = userData.firstName.toLowerCase();
    console.log(userData);
    users[id] = userData;
    console.log(users);
    res.send(id);
})

router.get('/:userId/books/:bookId', function (req, res) {
    res.send(req.params);
});

module.exports = router