const express = require('express');
const router = express.Router(); //having instance of express.router()

// middleware that is specific to this router,
// whenever this router gets load, below code will get executes first and then the endpoint
//specific to route path gets executes
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
})

// define the home page route
router.get('/', function (req, res) { //so here the path will be localhost3000:birds/
  res.send('Birds home page');
})

// define the about route
router.get('/about', function (req, res) {//so here the path will be localhost3000:birds/about
  res.send('About birds');
})

router.get('/:id', (req,res)=>{ //so here the path will be localhost3000:birds/1
    res.send(`bird id : ${req.params.id}`);
})

module.exports = router; //here we are exporting our router