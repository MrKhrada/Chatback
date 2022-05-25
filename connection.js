const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://mrkhrada:PGcojhWkEh2ZfKmH@cluster0.fual8.mongodb.net/?retryWrites=true&w=majority`, () => {
    console.log('Connected to MongoDB')
})
