const mongoose = require('mongoose')

const db = async() => {
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected DB')
    } catch(error){
        console.log('Connection Error DB');
    }
}

module.exports = { db }

