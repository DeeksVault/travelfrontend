const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbConnection = async ()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_STRING)
    }
    catch(error){
        console.log("error occured in connecting to databasse");
    }
}

module.exports = dbConnection