const express = require('express');
const router = express.Router();
var path = require("path");

router.use(express.static('public'))

// Documentation here on why we use router.
// https://expressjs.com/en/guide/routing.html
router.get('/austin', function(req, res) {
    res.sendFile(path.join(__dirname+'/../public/aboutMe/austin.html'));
});

router.get('/han', function(req, res) {
    res.sendFile(path.join(__dirname+'/../public/aboutMe/han.html'));
});

router.get('/Gerry', function(req, res) {
    res.sendFile(path.join(__dirname+'/../public/aboutMe/gerry.html'));
});

router.get('/jesus', function(req, res) {
	res.sendFile(path.join(__dirname+'/../public/aboutMe/jesus.html'))
})

router.get('/audrey', function(req, res) {
    res.sendFile(path.join(__dirname+'/../public/aboutMe/audrey.html'))
});

router.get('/alexander', function(req, res) {
	res.sendFile(path.join(__dirname+'/../public/aboutMe/alexander.html'))
})

router.get('/raz', function(req, res) {
    res.sendFile(path.join(__dirname+'/../public/aboutMe/raz.html'))
});

module.exports = router;