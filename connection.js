const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.fual8.mongodb.net/MernChat?retryWrites=true&w=majority`, () => {
    console.log('Connected to MongoDB')
})
