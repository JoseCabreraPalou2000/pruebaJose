const express = require('express')
const router = express.Router()
const app = express();

// @desc  Login page
// @route GET /
router.get('/',  (req,res) => {
  res.render('index/home');
});

// @desc  Menu
// @route GET /Menu
router.get('/menu', (req, res) => {
    res.render('carta/menu.hbs');
});


module.exports = router
