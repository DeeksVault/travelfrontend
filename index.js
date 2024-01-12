const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const dbConnection = require('./config/dbConfig');
const hotelRouter = require('./routes/hotelRoutes');
const dataImportRouter = require('./routes/importDataRoute')
const PORT = 5000;


app.use(express.json());
dbConnection();
app.get('/' , (req , res)=>{
    res.send('Server is running');
})

app.use('/api/hotels' ,hotelRouter)
app.use('/api/hotelsdata' , dataImportRouter)

mongoose.connection.once("open" , ()=>{
    console.log("connected database");
    app.listen(process.env.PORT || PORT , ()=>{
        console.log(`server is running at port ${process.env.PORT}`);
    })
})