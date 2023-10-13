const mongoose = require('mongoose');

require('dotenv').config({ path: './env/.env' });

const db = async() => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.URL)
        console.log('Connected to DB')
    } catch (error) {
        console.log('Connection Error to DB:', error.message);
    }

}
module.exports = { db }
