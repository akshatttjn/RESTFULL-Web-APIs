// Importing the Mongoose library for MongoDB connectivity
const mongoose = require('mongoose');

// Defining a schema for the "Men's Ranking" data
const menSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true // Ensure that the ranking value is unique
    },
    name: {
        type: String,
        required: true,
        trim: true // Remove any leading or trailing whitespace
    },
    dob: {
        type: Date,
        required: true,
        trim: true // Remove any leading or trailing whitespace
    },
    country: {
        type: String,
        required: true,
        trim: true // Remove any leading or trailing whitespace
    },
    event: {
        type: String,
        default: "100m" // Default event type is "100m"
    }
});

// Creating a model named "MensRanking" using the defined schema

//Creating a Model: Use mongoose.model to create a Mongoose model named MensRanking. 
// The first argument 'MenRanking' is the singular name of the collection in the database, and the second 
// argument menSchema is the schema defined earlier.
const MensRanking = new mongoose.model('MenRanking', menSchema);

// Exporting the model to be used in other parts of the application
module.exports = MensRanking;
