const express = require("express");
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"../public/assets/html/index.html"));
})

router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,"../public/assets/html/contact.html"));
})

router.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname,"../public/assets/resume.pdf"));
})

router.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname,"../public/assets/html/portfolio.html"));
})

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,"../public/assets/html/index.html"));
})

module.exports = router;