const express = require('express');
const hotels = require('../data/hotels');
const router = express.Router();
const Hotel = require('../models/hotelModel');
const hotelController = require('../controllers/hotelController');

router.route("/").get(hotelController)

module.exports = router;