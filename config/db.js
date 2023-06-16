const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASWD}@integracija.cwd3kzh.mongodb.net/`);
        console.log('Connect to MongoDB...',conn.connection.host)
    } catch (err) {
        console.log("Could not connect to MongoDB...", err)
    }
}

module.exports = connectDB;

