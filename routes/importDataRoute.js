const express = require('express');
const mongoose = require('mongoose');

const Hotel = require('../models/hotelModel');
const hotels = require('../data/hotels');

const router = express.Router();


router.route("/").post(async (req, res)=>{
    try{
        // await Hotel.remove();
        const hotelsInDB = await Hotel.insertMany(hotels.data);
        res.json(hotelsInDB);
    }
    catch(error){
        res.json({error:"error occured while insserting hotels into DB"});
    }
})

module.exports = router;