const mongoose = require('mongoose');

async function connect(){
    console.log('Connecting to databse...')
    await mongoose.connect ("mongodb+srv://Groot:flapie123@cluster0.fhmib.mongodb.net/test" ,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("Connected to database!")
}

module.exports = connect()