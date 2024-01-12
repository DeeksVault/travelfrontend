const jwt = require('jsonwebtoken');
const {User} = require('../models/userModel');
const dotenv = require("dotenv");

dotenv.config();


// this has to be implemented
const authenticate = async (req, res, next) => {
    try {

        const token = req.header('Authorization').replace("Bearer " , "");
        // console.log(token);
        // console.log(process.env.JWT_TOKEN);
        const decoded = jwt.verify(token, "deek");

        console.log(decoded.userId)

        const user = await User.findById(decoded.userId);

        if (!user) {
            throw new Error();
        }

        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = { authenticate }