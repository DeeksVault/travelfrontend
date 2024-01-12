const express = require('express');
const categories = require('../data/categories');
const router = express.Router();
const Category = require('../models/categoryModel')

router.route("/").get(
    async (req , res)=>{
        const hotelCategory = req.query.category;
        try{
            let hotels
            if(hotelCategory){
                hotel = await Hotel.find({category: hotelCategory})
            }
            else{
                hotels = await Hotel.find({});
            }
            hotels = await Hotel.find({});
            hotels ? res.json(hotels) : res.status(404).json({message : "No data found"});
        }
        catch(error){
            console.log(error)
        }
    }
)

module.exports = router;